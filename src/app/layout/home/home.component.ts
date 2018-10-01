import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { PostService } from "../../core/services/post.service";
import { LoadingState } from '../../core/components/loading/loading.component';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { MouseEvent } from '@agm/core';
import { } from '@types/googlemaps';
declare let google: any
declare let OverlappingMarkerSpiderfier: any
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConversationComponent } from '../../core/components/conversation/conversation.component';
import { ToastrService } from 'ngx-toastr';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  all_post_list: any = [];
  fb_friends: boolean = false;
  loading: LoadingState = LoadingState.NotReady;
  search_key: string;
  items: any = [];
  isTracking = false;
  zoom: number = 8;
  lat: number = 30.0444;
  lng: number = 31.2357;
  markers: any[] = [];
  offsets = [];
  openedWindow: number = 0;
  closeResult: string;
  name: string;
  fbId: string;
  public searchControl: FormControl;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  manual_loc_key: boolean;
  constructor(
    private postService: PostService,
    private _sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.loading = LoadingState.Processing;
    this.name = localStorage.getItem('name')
    this.fbId = localStorage.getItem('fbId')
    this.getPostList();
    this.searchControl = new FormControl();
    this.setManualPosition();
  }

  setManualPosition() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          localStorage.setItem('current_lat', this.lat.toString())
          localStorage.setItem('current_lng', this.lng.toString())
        });
      });
    });
    if ((localStorage.getItem('current_lat') && localStorage.getItem('current_lng')) || localStorage.getItem('set_loc')) {
      this.manual_loc_key = true;
    }
  }

  openConversation(data) {
    let dialogRef = this.dialog.open(ConversationComponent, {
      width: '400px',
      data: { info: data, posts: this.items, fbId: this.fbId }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {
        console.log(result)
      }
    })
  }


  openWindow(id) {
    this.openedWindow = id;
    window.scrollTo(0, 0);
  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }

  getOffset(index: number) {
    let r = 0.05
    let degree = index * 2 * Math.PI / this.markers.length;
    let scaleFactor = this.markers.length / 5000;
    return {
      lat: Math.cos(degree) * scaleFactor,
      lon: Math.sin(degree) * scaleFactor
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      },
        (error) => {
          if (localStorage.getItem('current_lat') && localStorage.getItem('current_lng')) {
            this.lat = +localStorage.getItem('current_lat');
            this.lng = +localStorage.getItem('current_lng');
          }
          else {
            this.manual_loc_key = true;
            this.toastr.error("Please allow your location, or set it manually on map", '', {
              timeOut: 3000,
            });
          }

        });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }

  getImage(image) {
    return this._sanitizer.bypassSecurityTrustUrl(image);
  }

  toggleFbPostList() {
    this.fb_friends = !this.fb_friends;
    this.loading = LoadingState.Processing;
    this.getPostList();
  }

  assignCopy() {
    this.all_post_list = Object.assign([], this.items);
  }

  search(value) {
    if (!value) this.assignCopy();
    this.all_post_list = Object.assign([], this.items).filter(
      item => item.itemName.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.condition.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  searchNearby() {
    this.trackMe();
  }

  getPostList() {
    var data = { "fb_friends": this.fb_friends }
    this.postService.getAllPost(data).subscribe(
      res => {
        console.log(res)
        this.items = [];
        this.markers = [];
        this.all_post_list = [];
        this.items = res;
        this.markers = res;
        this.markers.forEach((marker, index) => {
          this.offsets.push(this.getOffset(index))
        })
        this.assignCopy()
        this.loading = LoadingState.Ready;
      },
      error => {
        this.loading = LoadingState.Ready;
        console.log(error);
      }
    )
  }

}
