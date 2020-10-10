import { User } from 'app/models/user';

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/service/authentication.service";
import { Participant } from "app/models/participant";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  participant: Participant = new Participant();

  constructor(private auth: AuthenticationService) { }

  getUser() {
      this.participant = this.auth.getItemLocalStorage();
  }

  ngOnInit() {
    this.getUser();
  }

}
