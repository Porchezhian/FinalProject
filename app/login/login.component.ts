import { Route, Router, ActivatedRoute} from '@angular/router';
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

  newsignup: boolean = false;
  admin = new Admin();
  constructor(private service: HttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (data) => {
        if(data["newsignup"] == "yes"){
          this.newsignup = true
        }
      }
    );
  }

  onSubmit(form: NgForm){
    this.admin.Username = form.value["username"];
    this.admin.Password = form.value["password"];
    this.service.loginAdmin(this.admin).subscribe(
      (data) => {
        if(data=="logged"){
          this.newsignup = false;
          this.router.navigate(['/home']);
        }
      }
    );
  }
}
