import { HttpService } from './../services/http.service';
import { Admin } from './../shared/admin.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  exist = true;
  admin = new Admin();
  constructor(private service: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm)
  {
    this.admin.Name = form.value["fullname"];
    this.admin.Username = form.value["username"];
    this.admin.Password = form.value["password"];
    this.admin.Email = form.value["email"];
    this.admin.Mobile = form.value["phonenumber"];
    console.log(this.admin);
    this.service.createAdmin(this.admin).subscribe(
      (data) => {
        if(data == "exist"){
          this.exist = true;
        }
        else{
          this.exist = false;
        }
      }
    );
  }
}
