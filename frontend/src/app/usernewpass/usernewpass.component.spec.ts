import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernewpassComponent } from './usernewpass.component';

describe('UsernewpassComponent', () => {
  let component: UsernewpassComponent;
  let fixture: ComponentFixture<UsernewpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsernewpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
