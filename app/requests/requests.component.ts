import { Totaldonation } from './../shared/totaldonation.model';
import { Donation } from './../shared/donation.model';
import { Router } from '@angular/router';
import { RequestsService } from './../services/requests.service';
import { Request } from './../shared/request.model';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: Request[];
  donations: Donation[];
  totaldonations: Totaldonation[];
  constructor(private http: HttpService,
              private requestService: RequestsService,
              private router: Router) { }

  ngOnInit() {
    this.http.getRequests().subscribe(
      (data: Request[]) => {
        this.requests = data;
        console.log(this.requests);
      }
    );

    this.http.getDonations().subscribe(
      (data: Totaldonation[]) => {
        this.totaldonations = data; 
      }
    );
  }

  // onClick(request: Request){
  //   this.requestService.sendRequestDetails(request);
  //   this.router.navigate(['home/requests/requestdetails']);
  // }
}
