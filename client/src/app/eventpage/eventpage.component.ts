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

  // event = {
  //   title: 'Τίτλος Δραστηριότητας',
  //   short_description: '',
  //   description: `Le Lorem Ipsum est simplement du faux texte employé dans la
  //   composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années
  //   1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour
  //   réaliser un livre spécimen de polices de texte. Il na pas fait que survivre
  //   cinq siècles, mais sest aussi adapté à la bureautique informatique, sans que son
  //   contenu nen soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles
  //   Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications
  //   de mise en page de texte, comme Aldus PageMaker.`,
  //   image: '../../assets/images/img3.jpg',
  //   price: 99.00,
  //   // startDate: ,
  //   location: 'Λεωφόρος Καλαμακίου 33, Άλιμος, 17455',
  //   type: ['Διασκέδαση', 'Θέατρο'],
  //   minAge:  8,
  //   maxAge:  12,
  //   sex: 'Aγόρια'
  // };

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
