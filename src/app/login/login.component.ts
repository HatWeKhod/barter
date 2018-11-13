import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../core/services/login.service';
import { SeoService } from '../core/services/seo.service';

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
    private activatedRoute: ActivatedRoute
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

}
