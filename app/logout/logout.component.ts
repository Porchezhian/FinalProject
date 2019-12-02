import { Router } from '@angular/router';
import { NavService } from './../services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private nav: NavService,
              private router: Router) { }

  ngOnInit() {
    this.nav.logged = false;
    this.router.navigate(['/login']);
  }

}
