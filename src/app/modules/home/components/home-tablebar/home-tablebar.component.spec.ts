import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTablebarComponent } from './home-tablebar.component';

describe('HomeTablebarComponent', () => {
  let component: HomeTablebarComponent;
  let fixture: ComponentFixture<HomeTablebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTablebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTablebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
