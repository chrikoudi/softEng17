import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { LocationService } from '../services/location.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService, private locService: LocationService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.slice(0, 4));
  }

  location: string = 'Athens';

  result = {};

  findLocation(): void {
    this.locService.getLocation().subscribe(result => this.result = JSON.stringify(result));
      //  .then((response) => this.result = response.results[0])
}
  
}
