import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../core/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private loginService: LoginService,
    private _seoService: SeoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.translate.use(localStorage.getItem('lang_key'));
    // this.getLoginData();
    this.activatedRoute.data.subscribe((data) => {
      this._seoService.updateTitle(data['title']);
      this._seoService.updateDescription(data['description'])
      this._seoService.updateKeywords(data['keywords'])
    });
  }

  getLoginData() {
    this.loginService.getLoginData().subscribe(
      res => {
        console.log(res)
        localStorage.setItem('isLoggedin', 'true')
        localStorage.setItem('fbId', res['fbId'])
        localStorage.setItem('name', res['name'])
      },
      error => {
        console.log(error)
      }
    )
  }

}
