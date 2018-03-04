import { LocationService } from './../services/location.service';
import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})

export class EventpageComponent implements OnInit {
  @Input() event: Event;
  show: boolean;
  quantity = 1;
  total: number;

  constructor(
    private route: ActivatedRoute,
   // private authService: AuthService,
    private eventService: EventService,
    private location: Location,
    private locService: LocationService) { this.show = false; }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
    .subscribe( (event) => {
      this.event = event;
      this.locService.getLοcation(this.event.location)
      .then((response) => this.event.location = response.results[0].formatted_address);
    });
  }

  goBack(): void {
    this.location.back();
  }

  minus() {
    if (this.quantity === 1) { this.quantity = 1;
    } else { this.quantity =  this.quantity - 1; }
  }

  plus() {
    if (this.quantity === this.event.numberOfTickets) {
      this.quantity = this.quantity;
    } else {
      this.quantity = this.quantity + 1;
    }
  }

  buy_tickets() {
    this.show = true;
    this.total = this.quantity * this.event.price;
  }

  checkout(): void {
    console.log('okey');
    this.event.numberOfTickets = this.event.numberOfTickets - this.quantity;
    if (this.event.numberOfTickets === 0) {
      this.quantity = 0;
    } else {
      this.quantity = 1;
    }
    this.eventService.updateEvent(this.event).subscribe();
    this.show = false;
  }

  buy_close() {
    this.show = false;
    this.quantity = 1;
  }

}
