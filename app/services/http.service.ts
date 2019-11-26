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
}
