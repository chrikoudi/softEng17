import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  user: object;

  constructor(public auth: AuthService) {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
             .subscribe( user => this.user = user );
  }

  logout() {
    this.user = this.auth.getUser();
    this.auth.logout()
      .map(user => console.log(user))
      .subscribe();
  }

  ngOnInit() { }

}
