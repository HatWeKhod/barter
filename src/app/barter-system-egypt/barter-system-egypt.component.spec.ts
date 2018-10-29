import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterSystemEgyptComponent } from './barter-system-egypt.component';

describe('BarterSystemEgyptComponent', () => {
  let component: BarterSystemEgyptComponent;
  let fixture: ComponentFixture<BarterSystemEgyptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarterSystemEgyptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarterSystemEgyptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
