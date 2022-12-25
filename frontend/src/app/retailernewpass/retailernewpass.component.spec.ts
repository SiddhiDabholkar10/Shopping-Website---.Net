import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailernewpassComponent } from './retailernewpass.component';

describe('RetailernewpassComponent', () => {
  let component: RetailernewpassComponent;
  let fixture: ComponentFixture<RetailernewpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailernewpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailernewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
