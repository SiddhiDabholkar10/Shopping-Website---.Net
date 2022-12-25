import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerRequestsComponent } from './retailer-requests.component';

describe('RetailerRequestsComponent', () => {
  let component: RetailerRequestsComponent;
  let fixture: ComponentFixture<RetailerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
