import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWithoutLoginComponent } from './home-without-login.component';

describe('HomeWithoutLoginComponent', () => {
  let component: HomeWithoutLoginComponent;
  let fixture: ComponentFixture<HomeWithoutLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWithoutLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWithoutLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
