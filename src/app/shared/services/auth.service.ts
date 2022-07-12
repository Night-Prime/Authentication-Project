import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of } from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService{
  // The 'userInfo' variable to store the user info decoded from the JWT access token.
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  // this variable defines the type of the JWT library needed
  JwtHelper = new JwtHelperService();

  constructor() {}

  // this method gets triggered and authenticates the user.
  userLogin(login:any):Observable<boolean>{
    if(login &&
    login.username &&
    login.password){
      // the mock token created
     const sampleJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";

     return of(sampleJWT).pipe(
     map((token) => {
    if(!token){
      return false;
    }
    // to store the token to my local storage
    localStorage.setItem("access_token", token);

    // decoding process occurs here!
    const decodedUser = this.JwtHelper.decodeToken(token);
    this.userInfo.next(decodedUser);
    return true;
     }));
    }
    return of(false);
  }
}
