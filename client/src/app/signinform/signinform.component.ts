import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


interface SignUpForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})

export class SigninformComponent implements OnInit {

  formInfo: SignUpForm =  {
    username: '',
    password: ''
  };

   constructor(private authService: AuthService) { }

  signup() {
     // console.log(this.formInfo);
    const {username, password} = this.formInfo;
    this.authService.signup(username, password)
    .map(user => console.log(user))
    .subscribe();
  }

  ngOnInit() {
  }

}


