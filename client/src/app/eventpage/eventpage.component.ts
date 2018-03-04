import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../models/event';
import * as jsPDF from 'jspdf';
import { ThrowStmt } from '@angular/compiler';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css']
})

export class EventpageComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  @Input() event: Event;
  show: boolean;
  quantity = 1;
  total: number;

  constructor(
    private route: ActivatedRoute,
   // private authService: AuthService,
    private eventService: EventService,
    private location: Location) { this.show = false; }

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

  buy_tickets() {
    this.show = true;
    this.total = this.quantity * this.event.price;
  }

  checkout(): void {
    console.log('okey');
    this.download();
    this.event.numberOfTickets = this.event.numberOfTickets - this.quantity;
    if (this.event.numberOfTickets === 0) {
      this.quantity = 0;
    } else {
      this.quantity = 1;
    }
    // this.eventService.updateEvent(this.event).subscribe();
    this.show = false;
  }

  buy_close() {
    this.show = false;
    this.quantity = 1;
  }

  public download() {

    let doc = new jsPDF();

    for (let i = 0 ; i < this.quantity; i++) {
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
    doc.deletePage(this.quantity + 1);
    // Save the PDF
    doc.save(this.event.title + '.pdf');
}
}
