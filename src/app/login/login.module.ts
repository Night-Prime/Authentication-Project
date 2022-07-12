import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route.module';
import { LoginComponent }  from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    LoginRouteModule,
    FormsModule
   ],
  providers: [],
  // bootstrap: [ LoginComponent ]
})
export class LoginModule {

}
