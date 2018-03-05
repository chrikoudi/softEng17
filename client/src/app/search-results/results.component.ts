import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/Observable';
import { dateFormatPipe } from '../dateFormatPipe';
import { LocationService } from '../services/location.service';
declare const google: any;

interface SearchForm {
   searchTerms: string;
   geo: {
     lat: number;
     lon: number;
   }
   distance: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  newDate: any;

  selectedType: [string];
  selectedAge: [string];
  selectedDate: Date;
  selectedPrice: number;
  selectedSex: [string];
  selectedDistance: number;
  selectedLocation: string;

   p: number = 1;

   event: Event;

   show: boolean;
   show_map: boolean;

   num = [5, 10, 15, 30, 50];
   dis = [1, 5, 10];
   sex = ['Αγόρι', 'Κορίτσι'];
   loc = ['Τρέχουσα', 'Ορισμός'];

   types = ['Κατηγορίες', 'Αθλητισμός', 'Ζωγραφική', 'Θέατρο', 'Κινηματογράφος', 'Παιδότοποι', 'Μουσική'];
   ages = ['Κατηγορίες', '1-3 ετών', '3-5 ετών', '5-12 ετών', '12-18 ετών'];
   dates = ['Κατηγορίες', 'Αύριο', 'Αυτή την εβδομάδα', 'Επόμενες δύο εβδομάδες'];

   events: Event[];

   results: Observable<Event[]>;
   temp_results: Observable<Event[]>;

  searchQuery: SearchForm = {
    searchTerms: '',
    geo: {
      lat: 37.983810,
      lon: 23.727539
    },
    distance: 5
  };

   constructor(private eventService: EventService, private locService: LocationService) {
      this.show = false;
      this.show_map = false;
   }

  ngOnInit(): void {
    this.getEvents();
  }

  search() {
    const { searchTerms , geo , distance } = this.searchQuery;
    this.results = this.eventService.searchEvents(searchTerms, geo, distance);
    this.temp_results = this.results;
  }

  location_search(locationStr: string): void {
    this.locService.getLatLon(locationStr)
        .then((response) => this.searchQuery.geo = { lat: response.results[0].geometry.geo.lat, lon: response.results[0].geometry.geo.lng})
        .catch((error) => console.error(error));
  }

  onClickDistanceHandler(dist: number) {
    this.searchQuery.distance = dist;
 }


   getEvents(): void {
     this.results = this.eventService.getEvents();
   }

   selectType (selectedType) {

    function check_type(element, index, array){
      return element === selectedType;
    }

    if (selectedType === this.types[1] || selectedType === this.types[2]
         || selectedType === this.types[3] || selectedType === this.types[4]
         || selectedType === this.types[5] || selectedType === this.types[6]) {
      this.results = this.results.map(results => results.filter(result => result.eventType.some(check_type)));
    }
  }

   selectAge (selectedAge) {

    function check_type(element, index, array) {
      return element === selectedAge;
    }

    if (selectedAge === this.ages[1] || selectedAge === this.ages[2]
         || selectedAge === this.ages[3] || selectedAge === this.ages[4]) {
      this.results = this.results.map(results => results.filter(result => result.age.some(check_type)));
    }
  }

  selectDate (selectedDate) {

    if (selectedDate === this.dates[1]) {
      selectedDate = new Date();
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 1);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.startDate === this.newDate));
    }
    else if (selectedDate === this.dates[2]) {
      selectedDate = new Date();
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 7);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.startDate < this.newDate));
    }
    else if (selectedDate === this.dates[3]) {
      selectedDate = new Date();
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 14);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.startDate < this.newDate));
    }
  }

  onClickPrice(selectedPrice) {

    if(selectedPrice === this.num[0])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[0]));
    }
    else if(selectedPrice === this.num[1])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[1]));
    }
    else if(selectedPrice === this.num[2])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[2]));
    }
    else if(selectedPrice === this.num[3]) {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[3]));
    } else if(selectedPrice === this.num[4]) {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[4]));
    }
  }

  onClickSex(selectedSex) {

    function check_type(element, index, array) {
      return element === selectedSex;
    }

    if(selectedSex === this.sex[0] || selectedSex === this.sex[1]) {
      this.results = this.results.map(results => results.filter(result => result.sex.some(check_type)));
    }
  }

  onClickLocationHandler(geo) {
    this.selectedLocation = geo;
    this.show = true;
  }

  selectTypeHandler(event: any) {
    this.selectedType = event.target.value;
  }

  selectAgeHandler (event: any) {
    this.selectedAge = event.target.value;
  }

  selectDateHandler (event: any) {
    this.selectedDate = event.target.value;
  }

  onClickPriceHandler(price) {
    this.selectedPrice = price;
  }

  onClickSexHandler(sex) {
    this.selectedSex = sex;
  }

  onClick() {
    this.results = this.temp_results;
    this.selectType(this.selectedType);
    this.selectAge(this.selectedAge);
    this.selectDate(this.selectedDate);
    this.onClickPrice(this.selectedPrice);
    this.onClickSex(this.selectedSex);
  }

  back() {
    this.show = false;
  }

  map() {
    this.show_map = true;
  }

  list() {
    this.show_map = false;
  }

}
