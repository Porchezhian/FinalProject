import { Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { Admin } from './../shared/admin.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = new Admin();
  constructor(private service: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.admin.Username = form.value["username"];
    this.admin.Password = form.value["password"];
    this.service.loginAdmin(this.admin).subscribe(
      (data) => {
        if(data=="logged"){
          console.log("logged");
        }
      }
    );
  }
}
