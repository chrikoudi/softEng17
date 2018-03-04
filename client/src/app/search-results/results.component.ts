import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

   p = 1;

   num = [5, 10, 15, 30, 50];
   dis = [1, 5, 10, 25, 50, 100];
   sex = ['Αγόρι', 'Κορίτσι'];
   loc = ['Τρέχουσα', 'Ορισμός'];

   types = ['Αθλητισμός', 'Ζωγραφική', 'Θέατρο', 'Κινηματογράφος', 'Παιδότοποι', 'Μουσική'];

   selectedType: string;
   selectedAge: number;
   selectedDate: number;
   selectedPrice: string;
   selectedDistance: string;
   selectedSex: string;
   selectedLocation: string;

   events: Event[];

   gl_events: Observable<Event[]>;

   constructor(private eventService: EventService) { }

   private searchTerms = new Subject<string>();

   search(term: string): void {
    this.searchTerms.next(term);
   }

  ngOnInit(): void {
      this.gl_events = this.searchTerms.pipe(
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.eventService.searchEvents(term)),
      );

    this.getEvents();
  }

   getEvents(): void {
     this.eventService.getEvents()
     .subscribe(events => this.events = events);
   }

   selectTypeHandler (event: any) {
     this.selectedType = event.target.value;
   }

   selectAgeHandler (event: any) {
    this.selectedAge = event.target.value;
  }

  selectDateHandler (event: any) {
    this.selectedDate = event.target.value;
  }

  onClickPrice(price) {
    this.selectedPrice = price;
  }

  onClickSex(sex) {
    this.selectedSex = sex;
  }

  onClickDistance(distance) {
    this.selectedDistance = distance;
  }

  onClickLocation(location) {
    this.selectedLocation = location;
  }

}
