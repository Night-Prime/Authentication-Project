import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route.module';
import { LoginComponent }  from './login.component';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ LoginRouteModule ],
  providers: [],
  // bootstrap: [ LoginComponent ]
})
export class LoginModule {

}
