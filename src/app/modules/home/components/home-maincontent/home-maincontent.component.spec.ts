import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaincontentComponent } from './home-maincontent.component';

describe('HomeMaincontentComponent', () => {
  let component: HomeMaincontentComponent;
  let fixture: ComponentFixture<HomeMaincontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMaincontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
