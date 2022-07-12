import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./home/home.module').then(_ => _.HomeModule)
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(_ =>_.LoginModule)
},{
  path:'dashboard',
  loadChildren:() => import('./dashboard/dashboard.module').then(_ => _.DashboardModule)
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
