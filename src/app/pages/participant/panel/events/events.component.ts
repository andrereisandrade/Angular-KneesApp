import { AppSettings } from './../../../../config/appSettings';
import { Component, OnInit } from '@angular/core';
import { Participant } from "app/models/participant";
import { EventService } from "app/service/event.service";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private participants: Participant[] = [];
  private events: Event[] = [];
  private filter = AppSettings.FILTER +'cidade:Pouso Alegre';

  constructor(private EventService: EventService) {

  }

  getEvents() {
    this.EventService.getEvents(this.filter)
      .subscribe(data => this.events = data);
  }

  ngOnInit() {
    this.getEvents();
  }
}
