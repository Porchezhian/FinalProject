import { Request } from './../shared/request.model';
import { Ngo } from './../shared/ngo.model';
import { HttpService } from './http.service';
import { User } from './../shared/user.model';
import { Injectable } from '@angular/core';
import { Donation } from '../shared/donation.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  donations: Donation[];
  requests: Request[];
  constructor(private http: HttpService) { }

  getRequestDetails(user: User){
    this.http.getRequestsForUser(user).subscribe(
      (data: Donation[]) => {
        
        this.donations = data;
      }
    );
  }

  getNgoRequests(ngo: Ngo){
    this.http.getRequestsForNgo(ngo).subscribe(
      (data:Request[]) => {
        
        this.requests = data;
      }
    );
  }
}
