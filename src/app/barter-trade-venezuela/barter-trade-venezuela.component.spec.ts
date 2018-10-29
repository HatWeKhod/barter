import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterTradeVenezuelaComponent } from './barter-trade-venezuela.component';

describe('BarterTradeVenezuelaComponent', () => {
  let component: BarterTradeVenezuelaComponent;
  let fixture: ComponentFixture<BarterTradeVenezuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarterTradeVenezuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarterTradeVenezuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
