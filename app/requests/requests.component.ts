import { User } from './../shared/user.model';
import { Event } from './../shared/event.model';
import { NgForm } from '@angular/forms';
import { Totaldonation } from './../shared/totaldonation.model';
import { Donation } from './../shared/donation.model';
import { Router } from '@angular/router';
import { RequestsService } from './../services/requests.service';
import { Request } from './../shared/request.model';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  emails: string[] = [];
  event = new Event();
  requests: Request[];
  donations: Donation[];
  totaldonations: Totaldonation[];
  constructor(private http: HttpService,
              private requestService: RequestsService,
              private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.http.getRequests().subscribe(
      (data: Request[]) => {
        this.requests = data;
      }
    );

    this.http.getDonations().subscribe(
      (data: Totaldonation[]) => {
        this.totaldonations = data; 
      }
    );
  }
 onSubmit(form: NgForm, request: Request, td: number){
  this.event.Ngo_Id = request.Ngo_Id;
  this.event.Ngo_Name = request.Ngo_Name;
  this.event.Request_Id = request.RequestId;
  this.event.Request_Title = request.Request_Title;
  this.event.category = request.category;
  this.event.Number_of_items_Required = request.Number_of_items_Required;
  this.event.Number_of_items_Donated = td;
  this.event.EventDate = form.value["eventdate"];
  this.http.getDonationByRequestId(this.event).subscribe(
    (data:boolean) => {
      console.log(data);
    }
  );
  this.eventService.storeEvent(this.event)
  }
}