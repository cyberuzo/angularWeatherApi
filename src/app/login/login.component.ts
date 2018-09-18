import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  userCreationStatus = 'No user was created';
  constructor() { }

  ngOnInit() {
  }

  onCreateUser()  {
    this.userCreationStatus = 'User was created. Username is ' + this.username;
  }

}
