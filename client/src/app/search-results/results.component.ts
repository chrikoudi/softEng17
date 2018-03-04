import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';
import { EventService } from '../services/event.service';
import { Observable } from 'rxjs/Observable';
import {dateFormatPipe} from '../dateFormatPipe';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  newDate : any;

  selectedType: [string];
  selectedAge: [string];
  selectedDate: Date;
  selectedPrice: number;
  selectedSex: [string];
  selectedDistance: number;
  selectedLocation: string;

   p: number = 1;

   show: boolean;

   num = [5, 10, 15, 30, 50];
   dis = [1, 5, 10, 25, 50, 100];
   sex = ['Αγόρι', 'Κορίτσι'];
   loc = ['Τρέχουσα', 'Ορισμός'];

   types = ['Κατηγορίες', 'Αθλητισμός', 'Ζωγραφική', 'Θέατρο', 'Κινηματογράφος', 'Παιδότοποι', 'Μουσική'];
   ages = ['Κατηγορίες', '1-3 ετών', '3-5 ετών', '5-12 ετών', '12-18 ετών'];
   dates = ['Κατηγορίες', 'Αύριο', 'Αυτή την εβδομάδα', 'Επόμενο ένα μήνα'];

   events: Event[];

   results: Observable<Event[]>; 
   temp_results: Observable<Event[]>;

   constructor(private eventService: EventService) { 
      this.show = false;
   }     

  ngOnInit(): void {
    this.getEvents();
  }

  search(term: string) {
    this.results = this.eventService.searchEvents(term);
    this.temp_results = this.results;
  }

  location_search(location: string) {
    //this.results = this.eventService.searchEvents(location);
  }

   getEvents(): void {
     this.eventService.getEvents()
     .subscribe(events => this.events = events);
   }

   selectType (selectedType) {

    function check_type(element, index, array){ 
      return element === selectedType
    }
    
    if(selectedType == this.types[1] || selectedType == this.types[2] 
         || selectedType == this.types[3] || selectedType == this.types[4] 
         || selectedType == this.types[5] || selectedType == this.types[6]) 
    {
      this.results = this.results.map(results => results.filter(result => result.type.some(check_type)));
    }
  }

   selectAge (selectedAge) {

    function check_type(element, index, array){ 
      return element === selectedAge
    }
    
    if(selectedAge == this.ages[1] || selectedAge == this.ages[2] 
         || selectedAge == this.ages[3] || selectedAge == this.ages[4]) 
    {
      this.results = this.results.map(results => results.filter(result => result.age.some(check_type)));
    }
  }

  selectDate (selectedDate) { 

    if(selectedDate === this.dates[1])
    {
      selectedDate = new Date(); 
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 1);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.date === this.newDate));
    } 
    else if(selectedDate == this.dates[2])
    {
      selectedDate = new Date(); 
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 7);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.date < this.newDate));
    } 
    else if(selectedDate == this.dates[3])
    {
      selectedDate = new Date(); 
      selectedDate = selectedDate.setDate(selectedDate.getDate() + 14);
      let dateFormatPipeFilter = new dateFormatPipe();
      this.newDate = dateFormatPipeFilter.transform(selectedDate);
      this.results = this.results.map(results => results.filter(result => result.date < this.newDate));
    }
  }

  onClickPrice(selectedPrice) {

    if(selectedPrice == this.num[0])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[0]));
    }
    else if(selectedPrice == this.num[1])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[1]));
    }
    else if(selectedPrice == this.num[2])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[2]));
    }
    else if(selectedPrice == this.num[3])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[3]));
    }
    else if(selectedPrice == this.num[4])
    {
      this.results = this.results.map(results => results.filter(result => result.price < this.num[4]));
    }
  }

  onClickSex(selectedSex) {

    function check_type(element, index, array){ 
      return element === selectedSex
    }
     
    if(selectedSex == this.sex[0] || selectedSex == this.sex[1]) 
    {
      this.results = this.results.map(results => results.filter(result => result.sex.some(check_type)));
    }
  }  


  onClickDistanceHandler(distance) {
    let selectedDistance = distance;

    if(selectedDistance == this.dis[0])
    {
      //this.results
    }
    else if(selectedDistance == this.dis[1])
    {
      //this.results
    }
    else if(selectedDistance == this.dis[2])
    {
      //this.results
    }
    else if(selectedDistance == this.dis[3])
    {
      //this.results
    }
    else if(selectedDistance == this.dis[4])
    {
      //this.results
    }
    else if(selectedDistance == this.dis[5])
    {
      //this.results
    }
  }

  onClickLocationHandler(location) {
    this.selectedLocation = location;
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

  onClick()
  {
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

}
