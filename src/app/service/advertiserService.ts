
import { FBService } from './fb.service';
import { AppSettings } from './../config/appSettings';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"
import { Advertiser } from 'app/models/advertiser.model';

@Injectable()
export class AdvertiserService {
	URL_ADVERTISER = AppSettings.URL_BASE + "anunciante/";
	URL_EVENT = AppSettings.URL_BASE + "evento/";
	advertiser: Advertiser = new Advertiser();
	filter = {
		page: 10,
		pagesize: 1,
		filter: 'cidade: SaoPaulo'
	}

	constructor(
		private fbService: FBService,
		private http: Http)
		 { }

	getAdvertiserList(filter) {
		console.log(filter);
		return this.http.get(this.URL_ADVERTISER + "lista/?"+filter)
			.map(res => res.json());
	}

	getAdvertiser(id) {
		return this.http.get(this.URL_ADVERTISER + id)
			.map(res => res.json());
	}

	createAdvertiser(advertiser) {
		return this.saveForm(advertiser);
	}

	getAdvertiserByEmail(email) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(email);
		return this.http.post(this.URL_ADVERTISER+"email/", email, options)
			.map((res: Response) => {
				console.log(res);
				return res.json();
			});
	}

	saveForm(advertiser) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		let body = JSON.stringify(advertiser);
		if(advertiser.id){
			return this.http.put(this.URL_ADVERTISER, body, options)
			.map((res: Response) => {return res.json();	});
		}else{
			return this.http.post(this.URL_ADVERTISER, body, options)
			.map((res: Response) => {return res.json();	});
		}
		
	}

	deleteEvent(id) {
		return this.http.delete(this.URL_ADVERTISER + id)
			.map(res => res.json());
	}

    createAdvertiserByFacebook() {
        return this.fbService.getUser()
            .then((res: any) => {
                this.advertiser.password = res.id;
                this.advertiser.email = res.email;
                this.advertiser.name = res.name;
                this.saveForm(this.advertiser).subscribe();
            });
	}
	
	saveImage(file) {
		const formData = new FormData();
		formData.append('file', file);
		const headers = new Headers({});
		let options = new RequestOptions({ headers });
		return this.http.post(this.URL_EVENT + "upload", formData, options)
			.map((res: Response) => {
				console.log(res);
				return res.toString()
			});
	}

}
