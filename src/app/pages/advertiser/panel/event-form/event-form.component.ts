import { AdvertiserService } from './../../../../service/advertiserService';
import { Advertiser } from './../../../../models/advertiser.model';
import { PlaceService } from 'app/service/place.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EventService } from "app/service/event.service";
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication.service';
import {Event} from 'app/models/event'

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

    constructor(
        private placeService: PlaceService,
        private EventService: EventService,
        private advertiserServervice: AdvertiserService,
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthenticationService) { }

    advertiser: Advertiser = new Advertiser()
    event: Event = new Event();
    user;
    categories: Array<string>;
    datepickerModel = "test";
    eventFacebook = false;
    image = null;
    data = []

    ngOnInit() {
        this.event.photo = "assets/images/logo_advertiser.png";
        this.getFilters();
    }


    eventForm = new FormGroup({
        link: new FormControl(),
        name: new FormControl(),
        date: new FormControl(),
        photo: new FormControl(),
        advertiser: new FormControl(),
        hour: new FormControl(),
        description: new FormControl(),
        address: new FormControl(),
        category: new FormControl(),
    });

    saveEvent() {
        if (this.image !== null) {
            this.eventForm.value.photo = this.image.name
        }
        let event = this.eventForm.value;
        if (this.advertiser.id) {
            event.advertiser = { id: this.advertiser.id };
        } else {
            event.advertiser = { id: this.user.id };
        }
        this.EventService.saveForm(this.eventForm.value)
            .subscribe(data => {
                console.log(data);
                this.saveImage();
            },
            error => {
                this.saveImage();
                console.log(error);
            });

    }

    setAddress(address: string) {
        this.eventForm.patchValue({ address: address });
    }

    saveImage() {
        if (this.image) {
            this.EventService.saveImage(this.image).subscribe(data => console.log(data));
            this.router.navigate(['/anunciante/painel/gerenciar/evento']);
        } else {
            this.router.navigate(['/anunciante/painel/gerenciar/evento']);
        }
    }

    onChange(event) {
        this.image = event.srcElement.files[0];
        this.eventForm.value.photo = this.image.name
        console.log(this.eventForm.value)


        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: any) => {
                this.event.photo = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
        this.image = event.srcElement.files[0];

    }

    getFilters() {
        this.categories = this.placeService.getCategories();
        this.user = this.auth.getItemLocalStorage();
        this.advertiserServervice.getAdvertiserByEmail(this.user.id)
            .subscribe(data => this.advertiser = data);
    }

    toogleFacebook(value) {
        this.eventFacebook = !value;
    }
}
