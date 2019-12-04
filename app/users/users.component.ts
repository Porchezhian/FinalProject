import { DetailsService } from './../services/details.service';
import { Router } from '@angular/router';
import { User } from './../shared/user.model';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  constructor(private http: HttpService,
              private router: Router,
              private details: DetailsService) { }

  ngOnInit() {
    this.http.getUsers().subscribe(
      (data:User[]) => {
        this.users = data;
      }
    );
}

  onClick(user: User){
      this.details.getRequestDetails(user);
      setTimeout(() => {
        this.router.navigate(['home/users/userdetails'], {queryParams:{name:user.Employee_Name}});
      }, 200);
  }
}
