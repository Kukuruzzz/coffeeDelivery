import { Component } from '@angular/core';
import {AuthService} from "../sevices/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public authService: AuthService) { }

  login(){
    this.authService.logIn();
  }
  logout(){
    this.authService.logOut();
  }
}
