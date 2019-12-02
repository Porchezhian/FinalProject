import { NavService } from './../services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = "Porchezhian";  

  constructor(private nav : NavService) { 
  }
  
  ngOnInit() {
    }
}


