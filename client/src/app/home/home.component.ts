import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
// import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[] = [];
  event: Event;

  // location = 'Λεωφόρος Καλαμακίου 33';
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    // this.findLatLon(this.location);
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.slice(0, 4));
  }

  // tslint:disable-next-line:member-ordering

  // findLatLon(location: string): void {
  //   this.locService.getLatLon(location)
  //       // tslint:disable-next-line:max-line-length
  //       .then((response) => this.event.location = { lat: response.results[0].geometry.location.lat, lon: response.results[0].geometry.location.lng})
  //       .catch((error) => console.error(error));
  // }


}
