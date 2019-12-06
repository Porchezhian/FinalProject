import { NavService } from './../services/nav.service';
import { Route, Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';
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
              private router: Router,
              private nav: NavService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (data) => {
        if(data["newsignup"] == "yes"){
          this.newsignup = true
        }
      }
    );
  }

  ngDoCheck(): void {
    if(this.nav.logged == true)
    {
      this.nav.logged = false;
    }    
    
  }

  onSubmit(form: NgForm){
    this.admin.Username = form.value["username"];
    this.admin.Password = form.value["password"];
    this.service.loginAdmin(this.admin).subscribe(
      (data) => {
        if(data!="notlogged"){
          this.nav.name = data.toString();
          this.newsignup = false;
          this.nav.logged = true;
          console.log(this.nav.logged);
          this.router.navigate(['/home']);
        }
      }
    );
  }
}
