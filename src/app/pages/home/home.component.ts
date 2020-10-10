import { AppSettings } from './../../config/appSettings';

import { Component, OnInit } from '@angular/core';
import { ParticipantService } from './../../service/participant.service';
import { EventService } from './../../service/event.service';
import { Participant } from './../../models/participant';
import { Event } from './../../models/event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private events: Event[] = [];
  private filter = AppSettings.FILTER+"endereco:Santa Rita do Sapucai"

  constructor(private EventService: EventService) {

  }

  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  removeSlide() {
    this.events.length = this.events.length - 1;
    this.events
  }

  afterChange(e) {
    console.log('afterChange');
  }

  getEvents() {
    this.EventService.getEvents(this.filter)
      .subscribe(data => this.events = data);
  }

  ngOnInit() {
    this.getEvents();
  }
}
