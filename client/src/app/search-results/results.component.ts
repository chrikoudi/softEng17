import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  events: Event[];

   constructor(private eventService: EventService) { }

   ngOnInit() {
     this.getEvents();
   }

   getEvents(): void {
     this.eventService.getEvents()
     .subscribe(events => this.events = events);
   }
}
