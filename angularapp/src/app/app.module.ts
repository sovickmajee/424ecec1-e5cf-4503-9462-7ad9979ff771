import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserdashboardComponent,
    AddvehicleComponent,
    EditvehicleComponent,
    VehiclelistComponent,
    ViewvehicleComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }