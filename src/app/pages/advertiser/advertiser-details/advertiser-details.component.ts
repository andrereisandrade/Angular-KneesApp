import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'app/service/advertiserService';
import { ActivatedRoute } from '@angular/router';
import { Advertiser } from 'app/models/advertiser.model';
import { Event } from 'app/models/event';
import { EventService } from 'app/service/event.service';
import { AppSettings } from 'app/config/appSettings';

@Component({
  selector: 'app-advertiser-details',
  templateUrl: './advertiser-details.component.html',
  styleUrls: ['./advertiser-details.component.css']
})
export class AdvertiserDetailsComponent implements OnInit {
  advertiser: Advertiser = new Advertiser();
  filter: string;
  eventList: Event[];
  constructor(private advertiserService: AdvertiserService,
     private route: ActivatedRoute,
     private eventService: EventService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.filter = AppSettings.FILTER + 'anunciante_id:'+ params['id'];
      this.advertiserService.getAdvertiser(params['id']).subscribe(data => {
        this.advertiser = data;
      });
      this.eventService.getEvents(this.filter).subscribe(data => {
        this.eventList = data;
      });
    });
  }

}
