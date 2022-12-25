import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerProfileComponent } from './retailer-profile.component';

describe('RetailerProfileComponent', () => {
  let component: RetailerProfileComponent;
  let fixture: ComponentFixture<RetailerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
