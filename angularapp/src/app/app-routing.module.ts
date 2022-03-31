import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditvehicleComponent } from './editvehicle/editvehicle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { ViewvehicleComponent } from './viewvehicle/viewvehicle.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userdashboard',component:UserdashboardComponent,pathMatch: 'full'},
  {path:'admindashboard',component:AdminDashboardComponent,pathMatch: 'full'},
  {path:'getvehiclelist',component:VehiclelistComponent,pathMatch:'full'},
  {path:'addvehicle',component:AddvehicleComponent},
  {path:'editvehicle/:id',component:EditvehicleComponent},
  {path:'viewvehicle/:id',component:ViewvehicleComponent},
  {path:'getuserlist',component:UserlistComponent,pathMatch:'full'},
  {path:'edituser/:id',component:EdituserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
