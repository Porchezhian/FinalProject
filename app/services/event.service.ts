import { Router } from '@angular/router';
import { Event } from './../shared/event.model';
import { HttpService } from './http.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnInit{

  constructor(private http: HttpService,
              private router: Router) { }

  ngOnInit(){
  }

  storeEvent(event: Event){
      this.http.storeEvent(event).subscribe(
        (data:string) => {
          if(data == "Event Added"){
            this.router.navigate(['home/event']);
          }
          }
      );
  }
  getEvents(){
    this.http.getEvents();
  }
}
