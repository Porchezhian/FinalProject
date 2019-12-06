import { HttpService } from './http.service';
import { Injectable, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeleteService implements OnInit {
  events: Event[] = [];
  constructor(private http:HttpService,
              private datepipe: DatePipe) { }

  ngOnInit(){
    this.http.getEvents().subscribe(
      (data: Event[]) => {
        let mydate = Date.parse(this.datepipe.transform(new Date(), 'yyyy-MM-dd'));
        data.forEach((event) => {
          if(Date.parse(event["EventDate"].split('T')[0])>mydate){
             this.events.push(event);
          }
          else{
            this.http.deleteRequest(event["Request_Id"]).subscribe(
              (data) => {
                console.log(data);
              }
            );
            this.http.deleteDonation(event["Request_Id"]).subscribe(
              (data) => {
                console.log(data);
              }
            );
            this.http.deleteEvent(event["Request_Id"]).subscribe(
              (data) => {
                console.log(data);
              }
            );
          }
        });
      }
    );
    return this.events;
  }

}

