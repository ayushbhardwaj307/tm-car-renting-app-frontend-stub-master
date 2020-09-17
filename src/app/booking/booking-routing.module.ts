import { HomeComponent } from '../home/home/home.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'book-vehicle',
    pathMatch: 'full',
    component: BookVehicleComponent,
    children: [
      {
        path: '**',
        pathMatch: 'full',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
