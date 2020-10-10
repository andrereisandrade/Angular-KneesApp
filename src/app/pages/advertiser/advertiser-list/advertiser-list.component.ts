import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from 'app/service/advertiserService';

@Component({
  selector: 'app-advertiser-list',
  templateUrl: './advertiser-list.component.html',
  styleUrls: ['./advertiser-list.component.css']
})
export class AdvertiserListComponent implements OnInit {

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
