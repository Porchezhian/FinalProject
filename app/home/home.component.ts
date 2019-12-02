import { NavService } from './../services/nav.service';
import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,
              private nav: NavService) { 
  }

  ngOnInit() {
    this.router.events.subscribe(
      (event: NavigationStart) => {
        if(event.navigationTrigger == "popstate"){
            console.log(event.navigationTrigger);
            this.nav.logged = false;
        }
      }
    )
  }

}
