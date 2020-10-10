import { AppSettings } from 'app/config/appSettings';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/service/event.service';
import { PlaceService } from "app/service/place.service";


@Component({
    selector: 'app-event',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private originalEvents: Event[];
    private searchenable = false;
    private events: Event[] = [];
    private filter = AppSettings.FILTER +'endereco:Santa rita do sapucai';
    private datepickerModel = "test";


    public categories: Array<string>;
    public states: Array<string>;
    public cities: Array<string>;

    constructor(
        private EventService: EventService,
        private PlaceService: PlaceService
    ) { }

    ngOnInit() {
        this.getEvents();
        this.getFilters()
    }

    getEvents() {
        this.EventService.getEvents(this.filter)
            .subscribe(data => this.events = data);
    }

    getFilters() {
        this.categories = this.PlaceService.getCategories();
        this.cities = this.PlaceService.getCities();
        this.states = this.PlaceService.getStates();
    }

    private value: any = {};
    private _disabledV: string = '0';
    private disabled: boolean = false;

    private get disabledV(): string {
        return this._disabledV;
    }

    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }

    public selectedCategory(value: any): void {
        console.log('Selected value is: ', value);
    }
    public selectedState(value: any): void {
        console.log('Selected value is: ', value);
    }
    public selectedCity(value: any): void {

        this.filter =  AppSettings.FILTER + "endereco:" + value.id;
        this.getEvents();
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }

    search(searchEvent) {
        console.log('caiu')
        let term = searchEvent.target.value
        if (term.trim() === '' || term.trim().length < 5) {
          this.events = this.originalEvents;
        } else {
          this.EventService.searchUsers(term)
            .subscribe(event => {
              console.log(event)
              this.events = event
            });
        }
      }

}
