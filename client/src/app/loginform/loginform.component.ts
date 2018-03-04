import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginformComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router ) {}

  formInfo: LoginForm =  {
    username: '',
    password: ''
  };

  ngOnInit() {
  }

  login() {
    const {username, password} = this.formInfo;
    if (username !== '' && password !== '') {
      // console.log(`Login with ${username} ${password}`);
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else {
      console.log('You must set a username and a password');
    }
  }
}
