import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'app/app-routing.module';

import { AppComponent } from 'app/app.component';
import { NavbarComponent } from 'app/layout/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
