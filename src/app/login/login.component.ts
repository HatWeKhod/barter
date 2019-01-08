import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../core/services/login.service';
import { SeoService } from '../core/services/seo.service';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { FormLoginModalComponent } from '../form-modal/form-login-modal.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private router: Router,
    private loginService: LoginService,
    private _seoService: SeoService,
    private activatedRoute: ActivatedRoute,
	private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.translate.use(localStorage.getItem('lang_key'));
    this.activatedRoute.data.subscribe((data) => {
      this._seoService.updateTitle(data['title']);
      this._seoService.updateDescription(data['description'])
      this._seoService.updateKeywords(data['keywords'])
    });    
  }

  useLanguage() {
    if (localStorage.getItem('lang_key') == "en") {
      localStorage.setItem('lang_key', 'ar');
      this.translate.use(localStorage.getItem('lang_key'));
    }
    else if (localStorage.getItem('lang_key') == "ar") {
      localStorage.setItem('lang_key', 'en');
      this.translate.use(localStorage.getItem('lang_key'));
    }

  }
	openFormModal(page) {
		
		if(page == 'register'){
			const modalRef = this.modalService.open(FormModalComponent);
		modalRef.result.then((result) => {
			console.log(result);
		  }).catch((error) => {
			console.log(error);
		  });
		}else if(page == 'login'){
			const modalRef = this.modalService.open(FormLoginModalComponent);
			modalRef.result.then((result) => {
				console.log(result);
			  }).catch((error) => {
				console.log(error);
			  });
		}
	  
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
