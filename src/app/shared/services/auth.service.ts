import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class AuthService{
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  userLogin() {
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYsrybwu"
    const refreshToken = 'Dhaniel';

    // store these token above into the local storage
    localStorage.setItem('user_token', userToken);
    localStorage.setItem('refresh_token', refreshToken);

    const data = {
      user_token: userToken,
      refresh_token: refreshToken
    };

    this.userInfo.next(data);
  }
}
