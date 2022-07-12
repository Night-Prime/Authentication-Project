import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  userLogin() {
    console.log(this.loginData);
  }

}
