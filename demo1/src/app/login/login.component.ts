import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UnsavedComponent } from '../unsaved-guard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, UnsavedComponent {

  username: string = '';

  constructor(public auth: AuthService, private ac: ActivatedRoute) {
    console.log('LoginComponent');
  }

  ngOnInit() {
    this.ac.data.subscribe(data => {
      console.log(data);
    })
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  type(value: string) {
    this.username = value;
  }

  canDeactive(): boolean {
    return this.username.length == 0; // username = '';
  }

}
