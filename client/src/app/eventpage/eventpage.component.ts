import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})

export class EventpageComponent implements OnInit {
  @Input() event: Event;

  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
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

}
