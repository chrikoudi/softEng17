import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LocationService } from './../services/location.service';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event';
import * as jsPDF from 'jspdf';
import { ThrowStmt } from '@angular/compiler';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})

export class EventpageComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  event: Event;
  show: boolean;
  numberOfTickets = 1;
  total: number;
  user: object;
  events: Event[];

  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private eventService: EventService,
    private geo: Location,
    private locService: LocationService) {

      this.user = this.auth.getUser();
      this.auth.getLoginEventEmitter()
        .subscribe( user => this.user = user );

      this.show = false; }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
    .subscribe( (event) => {
      this.event = event;
      this.locService.getLοcation(this.event.geo)
      .then((response) => this.event.geo = response.results[0].formatted_address);
    });
  }

  goBack(): void {
    this.geo.back();
  }

  minus() {
    if (this.numberOfTickets === 1) { this.numberOfTickets = 1;
    } else { this.numberOfTickets =  this.numberOfTickets - 1; }
  }

  plus() {
    if (this.numberOfTickets === this.event.numberOfTickets) {
      this.numberOfTickets = this.numberOfTickets;
    } else {
      this.numberOfTickets = this.numberOfTickets + 1;
    }
  }

  buy_tickets() {
    this.show = true;
    this.total = this.numberOfTickets * this.event.price;
  }

  checkout(): void {
    console.log('okey');
    this.download();
    this.event.numberOfTickets = this.event.numberOfTickets - this.numberOfTickets;
    if (this.event.numberOfTickets === 0) {
      this.numberOfTickets = 0;
    } else {
      this.numberOfTickets = 1;
    }
    // this.eventService.updateEvent(this.event).subscribe();
    this.show = false;
  }

  buy_close() {
    this.show = false;
    this.numberOfTickets = 1;
  }

  public download() {

    let doc = new jsPDF();

    for (let i = 0 ; i < this.numberOfTickets; i++) {
      let specialElementHandlers = {
        '#editor': function(element, renderer) {
          return true;
        }
      };

      let content = this.content.nativeElement;

      doc.fromHTML(content.innerHTML, 15, 15, {
        'width': 111,
        'elementHandlers': specialElementHandlers,

      });
      doc.addPage();
      // i = i + 1 ;
    }
    doc.deletePage(this.numberOfTickets + 1);
    // Save the PDF
    doc.save(this.event.title + '.pdf');

}
}
