import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  formInfo=  {
    username: '',
    password: ''
  }; 

  onSubmit(form: NgForm) {
    console.log(this.formInfo);
  }
  constructor() { }

  ngOnInit() {
  }

 /* login() {
    const {username, password} = this.formInfo;
    if (username !== '' && password !== '') {
      console.log(`Login with ${username} ${password}`);
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else {
      console.log('You must set a username and a password');
    }
  }*/
}
