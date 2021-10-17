import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatsImagesComponent } from './components/cats-images/cats-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserInfoComponent,
    NavbarComponent,
    CatsImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
