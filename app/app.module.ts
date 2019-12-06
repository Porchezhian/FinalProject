import { HttpService } from './services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { NgosComponent } from './ngos/ngos.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NgodetailsComponent } from './ngodetails/ngodetails.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { EventComponent } from './event/event.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    PageNotFoundComponent,
    UsersComponent,
    NgosComponent,
    UserdetailsComponent,
    NgodetailsComponent,
    RequestsComponent,
    RequestdetailsComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
