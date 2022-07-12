import { NgModule } from '@angular/core';
import { HomeRouteModule } from './home.route.module';
import { HomeComponent }  from './home.component';

@NgModule({
  declarations: [ HomeComponent ],
  imports: [ HomeRouteModule ],
  providers: [],
  // bootstrap: [ HomeComponent ]
})
export class HomeModule {}
