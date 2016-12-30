import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { routing, appRouterProviders } from './app.routes';


@NgModule({
  declarations: [
  AppComponent,
  NavComponent,
  HomeComponent,
  PortfolioComponent,
  ContactComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing
  ],
  providers: [appRouterProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
