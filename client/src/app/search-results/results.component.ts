import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Event } from '../models/event';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  events: Event[] = [
    new Event('Kidzland1', 'this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.', '', '../../assets/images/img1.jpg', 0, '', [], 0, 0, ''),
    new Event('Kidzland2','this is the second event.this is the second event.this is the second event.this is the second event.this is the second event.this is the second event.', '', '../../assets/images/img2.jpeg', 0, '', [], 0, 0, ''),
    new Event('Kidzland3','this is the third event.this is the third event.this is the third event.this is the third event.this is the third event.this is the third event.this is the third event.', '', '../../assets/images/img3.jpg', 0, '', [], 0, 0, ''),
    new Event('Kidzland4','this is the fourth event.this is the fourth event.this is the fourth event.this is the fourth event.this is the fourth event.this is the fourth event.this is the fourth event.', '', '../../assets/images/img4.jpg', 0, '', [], 0, 0, ''),
    new Event('Kidzland5','this is the fifth event.this is the fifth event.this is the fifth event.this is the fifth event.this is the fifth event.this is the fifth event.this is the fifth event.this is the fifth event.', '', '../../assets/images/img5.jpg', 0, '', [], 0, 0, ''),
    new Event('Kidzland6','this is the sixth event.this is the sixth event.this is the sixth event.this is the sixth event.this is the sixth event.this is the sixth event.this is the sixth event.this is the sixth event.', '', '../../assets/images/img6.jpg', 0, '', [], 0, 0, ''),
    new Event('Kidzland7','this is the seventh event.this is the seventh event.this is the seventh event.this is the seventh event.this is the seventh event.this is the seventh event.this is the seventh event.this is the seventh event.', '', '../../assets/images/img7.jpg', 0, '', [], 0, 0, '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
