import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRightbarComponent } from './home-rightbar.component';

describe('HomeRightbarComponent', () => {
  let component: HomeRightbarComponent;
  let fixture: ComponentFixture<HomeRightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
