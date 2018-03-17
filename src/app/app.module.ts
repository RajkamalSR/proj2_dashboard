import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeNavbarComponent } from './modules/home/components/home-navbar/home-navbar.component';
import { HomeTablebarComponent } from './modules/home/components/home-tablebar/home-tablebar.component';
import { HomeMaincontentComponent } from './modules/home/components/home-maincontent/home-maincontent.component';
import { HomeRightbarComponent } from './modules/home/components/home-rightbar/home-rightbar.component';
import { LayoutComponent } from './core/layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    HomeTablebarComponent,
    HomeMaincontentComponent,
    HomeRightbarComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
