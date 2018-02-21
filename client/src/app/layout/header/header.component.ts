import { Component, OnInit, ViewChild } from '@angular/core';
//import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
    ngOnInit() {
    }
    
  /*@ViewChild('log') log: Popup;
  @ViewChild('reg') reg: Popup;

  userLogin(){
    this.log.options = {
    header: '',
    color: '#fff',
    widthProsentage: 25,
    animationDuration: 2,
    showButtons: true,
    confirmBtnContent: 'OK',
    cancleBtnContent: 'Cancel',
    confirmBtnClass: 'btn btn-success',
    cancleBtnClass: 'btn btn-danger',
    animation: 'bounceInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
};
    this.log.show(this.log.options);

  };

  userRegister(){
    this.reg.options = {
      header: '',
      color: '#fff',
      widthProsentage: 35,
      animationDuration: 2,
      showButtons: true,
      confirmBtnContent: 'OK',
      cancleBtnContent: 'Cancel',
      confirmBtnClass: 'btn btn-success',
      cancleBtnClass: 'btn btn-danger',
      animation: 'bounceInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
  };
    this.reg.show(this.reg.options);
  }

*/
}
