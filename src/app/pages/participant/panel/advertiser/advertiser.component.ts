import { AdvertiserService } from 'app/service/advertiserService';
import { Advertiser } from 'app/models/advertiser.model';
import { Component, OnInit } from '@angular/core';
import { Participant } from "app/models/participant";
import { EventService } from "app/service/event.service";
import { AppSettings } from './../../../../config/appSettings';

@Component({
  selector: 'app-advertiser',
  templateUrl: './advertiser.component.html',
  styleUrls: ['./advertiser.component.css']
})
export class AdvertiserComponent implements OnInit {

  filter;
  advertiserList;

  constructor(private advertiserService: AdvertiserService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.advertiserService.getAdvertiserList(this.filter)
        .subscribe(data => this.advertiserList = data);
}
}
