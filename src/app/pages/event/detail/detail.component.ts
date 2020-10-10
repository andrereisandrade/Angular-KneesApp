import { Event } from 'app/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventService } from "app/service/event.service";
import { OnClickEvent } from "angular-star-rating";
import { OnRatingChangeEven } from "angular-star-rating";
import { OnHoverRatingChangeEvent } from "angular-star-rating";
import { PlaceService } from "app/service/place.service";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    event: Event = new Event();
    constructor(
        private placeService: PlaceService,
        private router: Router,
        private eventService: EventService,
        private route: ActivatedRoute) { }

    getEvent() {
        this.route.params.subscribe(params => {
            this.eventService.getEvent(params['id'])
                .subscribe(event => {
                    this.event = event
                    console.log(this.event)
                });
        });
    }
    onClickResult: OnClickEvent;
    onHoverRatingChangeResult: OnHoverRatingChangeEvent;
    onRatingChangeResult: OnRatingChangeEven;

    onClick = ($event: OnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;
    };

    onRatingChange = ($event: OnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };

    onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };
    ngOnInit() {
        this.getEvent();
    }

}