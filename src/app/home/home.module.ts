import { HomeRoutingModule } from './home-routing.moudule';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {BookingModule} from '../booking/booking.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BookingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
