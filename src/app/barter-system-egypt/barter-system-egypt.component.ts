import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/services/seo.service';

@Component({
  selector: 'app-barter-system-egypt',
  templateUrl: './barter-system-egypt.component.html',
  styleUrls: ['./barter-system-egypt.component.scss']
})
export class BarterSystemEgyptComponent implements OnInit {

  constructor(
    private _seoService: SeoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this._seoService.updateTitle(data['title']);
      this._seoService.updateDescription(data['description'])
      this._seoService.updateKeywords(data['keywords'])
    });
  }

}
