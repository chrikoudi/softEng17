import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})

export class SigninformComponent implements OnInit {

  userformInfo =  {
    ufname: '',
    ulname: '',
    uemail: '',
    upassword: '',
    upassword_repeat: ''
  };

  onSubmituser(form: NgForm) {
    console.log(this.userformInfo);
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


