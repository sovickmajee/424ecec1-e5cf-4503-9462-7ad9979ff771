import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';

  constructor(private _service:SignupService, private _router:Router) { }

  ngOnInit(): void{}

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{console.log("response recieved");
       if(this.user.email=='admin')     
          this._router.navigate(['/admindashboard'])
      else
       this._router.navigate(['/userdashboard'])
    },
      error =>{console.log("exception occured"),
      this.msg="Bad Credential,please enter valid email and password"
    }
    );

  }
  myimage:string="assets/images/1.jpg";
}
