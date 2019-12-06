import { Router, NavigationStart } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  logged: boolean;
  name: string;
  constructor(private router: Router) {
    this.logged = false; 
    console.log(this.logged);
  }
}
