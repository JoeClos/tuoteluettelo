import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneService } from './phone.service';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    
    PhoneListComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
