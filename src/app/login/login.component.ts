import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService){

  }
  ngOnInit(): void {
  }

  loginData = {
    username: '',
    password: ''
  };

  userLogin() {
    console.log(this.loginData);
    this.authService.userLogin(this.loginData)
    .subscribe(
    (value) => {
     if(value){
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
