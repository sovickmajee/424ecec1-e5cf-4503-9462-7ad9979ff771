import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goToAddVehicles(){
    this.route.navigate(['/addvehicle']);
  }

  goToVehiclelist(){
    this.route.navigate(['/getvehiclelist']);
  }

  goToUserlist(){
    this.route.navigate(['/getuserlist']);
  }
}
