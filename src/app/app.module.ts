import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
const appRoutes:Routes=[
  {
    path:"",component:AddbooksComponent
  },
  {
    path:"ok",component:ViewbooksComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbooksComponent,
    ViewbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
