import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
const appRoutes:Routes=[
  {
    path:"",component:AddbooksComponent
  },
  {
    path:"ok",component:ViewbooksComponent
  },
  {
    path:"on",component:SearchbooksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbooksComponent,
    ViewbooksComponent,
    SearchbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
