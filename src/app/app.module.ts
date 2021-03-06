import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './shared/sign-up/sign-up.component';
import { SignInModalComponent } from './shared/sign-in-modal/sign-in-modal.component';
import { BookingModule } from './booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    HomeComponent,
    FooterComponent,
    SignUpComponent,
    SignInModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        BookingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
