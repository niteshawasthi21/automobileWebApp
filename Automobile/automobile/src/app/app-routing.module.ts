import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VahicleInfoComponent } from './components/vahicle-info/vahicle-info.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { PageNotFoundComponent } from './shared_component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo:"dashboard",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/:id',component:VahicleInfoComponent, canActivate:[AuthGuardGuard]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuardGuard]},
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  {path:"**", component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
