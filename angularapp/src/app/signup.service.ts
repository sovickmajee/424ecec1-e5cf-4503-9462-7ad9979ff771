import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  public loginUserFromRemote(user:User):Observable<any>
  {
    return this.http.post("https://8080-edccdeabaddccedccceaeceedbbffdcab.examlyiopb.examly.io/login",user)
  }
  public signupFromRemote(user:User):Observable<any>
  {
    return this.http.post("https://8080-edccdeabaddccedccceaeceedbbffdcab.examlyiopb.examly.io/signup",user)
  }
}
