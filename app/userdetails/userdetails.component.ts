import { User } from './../shared/user.model';
import { DetailsService } from './../services/details.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Donation } from '../shared/donation.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  donations: Donation[];
  name: string;
  constructor(private route: ActivatedRoute,
              private details: DetailsService) { }
 
  ngOnInit() {
    this.donations = this.details.donations;
    console.log(this.donations);
    this.route.queryParams.subscribe(
      (data) => {
        this.name = data["name"];
      }
    );
  }

}
