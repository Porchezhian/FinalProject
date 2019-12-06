import { EventComponent } from './event/event.component';
import { RequestsComponent } from './requests/requests.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsersComponent } from './users/users.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgosComponent } from './ngos/ngos.component';
import { NgodetailsComponent } from './ngodetails/ngodetails.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home/event', component: EventComponent, canActivate:[AuthGuardService]},
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'register', component: RegisterComponent},
  //{path:'pagenotfound', component: PageNotFoundComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path:'home/users', component: UsersComponent, canActivate:[AuthGuardService]},
  {path:'home/ngos', component: NgosComponent, canActivate:[AuthGuardService]},
  {path:'home/users/userdetails', component: UserdetailsComponent, canActivate:[AuthGuardService]},
  {path:'home/users/ngodetails', component: NgodetailsComponent, canActivate:[AuthGuardService]},
  {path:'home/requests', component:RequestsComponent, canActivate:[AuthGuardService]},
  {path:'home/requests/requestdetails', component: RequestdetailsComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
