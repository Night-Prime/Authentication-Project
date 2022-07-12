import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){

  }
  ngOnInit(): void {
  }

  loginData = {
    username: '',
    password: ''
  };

  // when the submit button is fired, authentication of the Form occurs here!
  userLogin() {
    console.log(this.loginData);
    this.authService.userLogin(this.loginData)
    .subscribe(
    (value) => {
     if(value){
      this.router.navigate(["/dashboard"]);
      alert('Suceesfully logged in!');
     }else{
      alert('Unable to log in');
     }
     },
    (error)=>{
    alert('failed error');
     }
    );
   }

}
