import { HttpService } from './../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Request } from './../shared/request.model';
import { DetailsService } from './../services/details.service';
import { Component, OnInit } from '@angular/core';
import { Totaldonation } from '../shared/totaldonation.model';


@Component({
  selector: 'app-ngodetails',
  templateUrl: './ngodetails.component.html',
  styleUrls: ['./ngodetails.component.css']
})
export class NgodetailsComponent implements OnInit {

  requests: Request[];
  name: string;
  totaldonations: Totaldonation[];
  constructor(private details: DetailsService,
              private route: ActivatedRoute,
              private http: HttpService) { }

  ngOnInit() {
    this.requests = this.details.requests;

    this.http.getDonations().subscribe(
      (data: Totaldonation[]) => {
        this.totaldonations = data; 
        
        for(let request of this.requests){
            for(let td of this.totaldonations){
              if(request.RequestId == td.Request_Id){
                request.Number_of_items_Donated = td.V;
              }
            }
        }
      }
    );

    this.route.queryParams.subscribe(
      (data) => {
        this.name = data["name"];
      }
    ); 
  }

}
