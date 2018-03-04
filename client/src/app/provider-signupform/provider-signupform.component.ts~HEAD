import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-provider-signupform',
  templateUrl: './provider-signupform.component.html',
  styleUrls: ['./provider-signupform.component.css']
})
export class ProviderSignupformComponent implements OnInit {

  providerformInfo =  {
    company_name: '',
    afm: '',
    phone: '',
    pfname: '',
    plname: '',
    pemail: '',
    ppassword: '',
    ppassword_repeat: ''
  };

  onSubmituser(form: NgForm) {
    console.log(this.providerformInfo);
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
