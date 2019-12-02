import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  logged: boolean;
  constructor() {
    this.logged = false; 
  }
  toggle(){
    this.logged = !this.logged;
  }
}
