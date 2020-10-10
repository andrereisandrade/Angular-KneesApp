import { AuthenticationService } from 'app/service/authentication.service';
import { AdvertiserService } from './../../../../service/advertiserService';
import { Advertiser } from 'app/models/advertiser.model';
import { Component, OnInit } from '@angular/core';
import { Participant } from "app/models/participant";
import { EventService } from "app/service/event.service";
import { Event } from 'app/models/event';
import { AppSettings } from 'app/config/appSettings';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  private participants: Participant[] = [];
  private advertiser: Advertiser = new Advertiser();
  private events: Event[] = [];
  private filter: string;

  constructor(
    private auth: AuthenticationService,
    private EventService: EventService) {

  }

  getEvents() {
    this.EventService.getEvents(this.filter).subscribe(
      data => {
        this.events = data;
        console.log(data);
      });
  }

  deleteEvent(id) {
    this.EventService.deleteEvent(id).subscribe(null,
      err => {
        this.getEvents();
      });
  }

  ngOnInit() {
    this.advertiser = this.auth.getItemLocalStorage();
    this.filter = AppSettings.FILTER + 'anunciante_id:'+ this.advertiser.id;
    this.getEvents();
  }
}
