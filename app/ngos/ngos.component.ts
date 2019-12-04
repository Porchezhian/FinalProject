import { DetailsService } from './../services/details.service';
import { Router } from '@angular/router';
import { Ngo } from './../shared/ngo.model';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngos',
  templateUrl: './ngos.component.html',
  styleUrls: ['./ngos.component.css']
})
export class NgosComponent implements OnInit {

  ngos:Ngo[];
  constructor(private http :HttpService,
              private router: Router,
              private details: DetailsService) { }

  ngOnInit() {
    this.http.getNgos().subscribe(
      (data:Ngo[]) => {
        this.ngos = data;
      }
    );
  }

  onClick(ngo:Ngo){
      this.details.getNgoRequests(ngo);
      setTimeout(() => {
        this.router.navigate(['home/users/ngodetails'], {queryParams: {name: ngo.Ngo_Name}});
      },200);
  }

}
