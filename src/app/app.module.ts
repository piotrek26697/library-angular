import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CustomerTrackingModule } from './customer-tracking/customer-tracking.module';
import { BookTrackingModule } from './book-tracking/book-tracking.module';
import { RentalTrackingModule } from './rental-tracking/rental-tracking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomerTrackingModule,
    BookTrackingModule,
    RentalTrackingModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
