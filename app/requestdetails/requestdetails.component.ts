import { Request } from './../shared/request.model';
import { RequestsService } from './../services/requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestdetails',
  templateUrl: './requestdetails.component.html',
  styleUrls: ['./requestdetails.component.css']
})
export class RequestdetailsComponent implements OnInit {

  request: Request;
  constructor(private requestService: RequestsService) { 
  }

  ngOnInit() {
    this.request = this.requestService.getRequestDetails();
  }

}
