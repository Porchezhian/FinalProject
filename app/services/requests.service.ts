import { Request } from './../shared/request.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  
  request: Request;
  constructor() { }

  sendRequestDetails(req: Request){
    this.request = req;
  }
  getRequestDetails(){
    return this.request;
  }

}
