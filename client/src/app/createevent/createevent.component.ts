import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});

  constructor() { }

  ngOnInit() {
  }

}
