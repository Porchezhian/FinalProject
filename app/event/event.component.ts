import { DeleteService } from './../services/delete.service';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  events: Event[];
  constructor(private http: HttpService,
              private deleteService: DeleteService) { }
  
  ngOnInit() {
    this.events = this.deleteService.ngOnInit();
  }

}
