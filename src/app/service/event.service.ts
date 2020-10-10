import { AppSettings } from './../config/appSettings';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"

@Injectable()
export class EventService {
	URL_EVENT = AppSettings.URL_BASE + "evento/";
	URL_USER = AppSettings.URL_BASE + "usuario/";
	URL_SEARCH_EVENTS = this.URL_EVENT + "lista/?" + AppSettings.FILTER + "endereco"
	constructor(private http: Http) { }



	getEvents(filter) {
		console.log(filter);
		return this.http.get(this.URL_EVENT + "lista/?" + filter)
			.map(res => res.json());
	}

	getEvent(id) {
		return this.http.get(this.URL_EVENT + id)
			.map(res => res.json());
	}

	createEvent(eventForm, file) {
		eventForm.photo = file.name;
		if (file) {
			this.saveImage(file);
		}
		return this.saveForm(eventForm);

	}
	searchUsers(searchParam: string) {
		var search = `${this.URL_SEARCH_EVENTS}:${searchParam}`;
		return this.http.get(search)
			.map(res => res.json());
	}

	saveForm(event) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(event);
		return this.http.post(this.URL_EVENT, body, options)
			.map(res => res.toString());
	}

	saveImage(file) {
		const formData = new FormData();
		formData.append('file', file);
		const headers = new Headers({});
		let options = new RequestOptions({ headers });
		return this.http.post(this.URL_EVENT + "upload", formData, options)
			.map(res => res.json());
	}

	deleteEvent(id) {
		return this.http.delete(this.URL_EVENT + id)
			.map(res => res.json());
	}

}
