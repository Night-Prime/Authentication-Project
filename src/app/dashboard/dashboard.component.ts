import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  userName:string = '';

  constructor(private authService: AuthService) { }
  // Auth service is injected

  ngOnInit(): void {
    // subscribing to AuthService here!
    this.authService.userInfo.subscribe(value => {
      if(value){
       this.userName = value.username;
      }
       })
   }
}
