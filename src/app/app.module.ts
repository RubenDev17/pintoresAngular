import { LoginService } from './services/LoginService';
import { PagesModule } from './Pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //HAY QUE IMPLEMENTARLO A MANO
import { PintorService } from './services/PintorService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [PintorService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
