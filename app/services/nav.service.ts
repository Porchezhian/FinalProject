import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  logged: boolean;
  name: string;
  constructor() {
    this.logged = false; 
  }
}
