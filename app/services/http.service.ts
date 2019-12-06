import { DetailsService } from './details.service';
import { Event } from './../shared/event.model';
import { Ngo } from './../shared/ngo.model';
import { User } from './../shared/user.model';
import { Admin } from './../shared/admin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  createAdmin(admin: Admin){
    return this.http.post("https://localhost:44392/api/admin", admin); 
  }

  loginAdmin(admin: Admin){
    return this.http.post("https://localhost:44392/api/login", admin);
  }

  getUsers(){
    return this.http.get("https://localhost:44392/api/user");
  }

  getNgos(){
    return this.http.get("https://localhost:44392/api/ngo");
  }

  getRequests(){
    return this.http.get("https://localhost:44392/api/request");
  }

  getDonations(){
    return this.http.get("https://localhost:44392/api/donation");
  }
  getRequestsForUser(user: User){
    return this.http.post("https://localhost:44392/api/donation", user);
  }
  getRequestsForNgo(ngo: Ngo){
    return this.http.post("https://localhost:44392/api/request", ngo);
  }
  storeEvent(event: Event){
    return this.http.post("https://localhost:44392/api/event", event);
  }
  getEvents(){
    return this.http.get("https://localhost:44392/api/event");
  }
  deleteEvent(id: number){
    return this.http.delete("https://localhost:44392/api/event/"+id);
  }
  deleteRequest(id: number){
    return this.http.delete("https://localhost:44392/api/request/"+id);
  }
  deleteDonation(id: number){
    return this.http.delete("https://localhost:44392/api/donation/"+id);
  }
  getDonationByRequestId(eve: Event){
    return this.http.post("https://localhost:44392/api/donationsbyrequestid", eve);
  }
}
