import { BookingRoutingModule } from './booking-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';



@NgModule({
  declarations: [BookVehicleComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  exports:[
    BookVehicleComponent
  ]
})
export class BookingModule { }
