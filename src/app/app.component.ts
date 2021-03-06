import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { Metrika } from 'ng-yandex-metrika';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translate: TranslateService,
    private router: Router,
    private metrika: Metrika,
    private location: Location,
	private modalService: NgbModal,
  ) {
    translate.setDefaultLang('en');

    if (localStorage.getItem('lang_key') == "en") {
      localStorage.setItem('lang_key', 'en');
    }
    else if (localStorage.getItem('lang_key') == "ar") {
      localStorage.setItem('lang_key', 'ar');
    }
    else {
      localStorage.setItem('lang_key', 'en');
    }
    let prevPath = this.location.path();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
        const newPath = this.location.path();
        this.metrika.hit(newPath, {
          referer: prevPath,
        });
        prevPath = newPath;
      }
    });

  }
  openFormModal() {
  const modalRef = this.modalService.open(FormModalComponent);
  
  modalRef.result.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

}
