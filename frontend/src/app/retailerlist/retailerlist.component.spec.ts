import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerlistComponent } from './retailerlist.component';

describe('RetailerlistComponent', () => {
  let component: RetailerlistComponent;
  let fixture: ComponentFixture<RetailerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
