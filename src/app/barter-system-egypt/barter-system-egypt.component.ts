import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/services/seo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-barter-system-egypt',
  templateUrl: './barter-system-egypt.component.html',
  styleUrls: ['./barter-system-egypt.component.scss']
})
export class BarterSystemEgyptComponent implements OnInit {
  constructor(
    private _seoService: SeoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this._seoService.updateTitle(data['title']);
      this._seoService.updateDescription(data['description'])
      this._seoService.updateKeywords(data['keywords'])
    });

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!localStorage.getItem('isLoggedin')) {
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
