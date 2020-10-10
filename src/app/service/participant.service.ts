import { Participant } from 'app/models/participant';
import { FBService } from './fb.service';
import { AppSettings } from './../config/appSettings';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"

@Injectable()
export class ParticipantService {
    participant: Participant = new Participant();

    constructor(
        private fbService: FBService,
        private http: Http) {
    }

    getParticipants() {
        return this.http.get(AppSettings.URL_BASE + "participante/lista")
            .map(res => res.json());
    }

    getParticipant(id) {
        return this.http.get(AppSettings.URL_BASE + "participante/" + id)
            .map(res => res.json());
    }

    createParticipant(participant) {
        participant.sex = "M"
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(participant);
        return this.http.post(AppSettings.URL_BASE + "participante", body, options).map((res: Response) => res.json());
    }

    updateParticipant(participant) {
        var id = participant.id;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(participant);
        return this.http.put(AppSettings.URL_BASE + "participante", body, options).map((res: Response) => res.json());
    }

    deleteUser(id) {
        return this.http.delete(this.getUserUrl(id))
            .map(res => res.json());
    }

    createParticipantByFacebook() {
        return this.fbService.getUser()
            .then((res: any) => {
                this.participant.password = res.id;
                this.participant.email = res.email;
                this.participant.name = res.name;
                this.createParticipant(this.participant).subscribe();
            });
    }

    private getUserUrl(id) {
        return AppSettings.URL_BASE + "/usuario/" + id;
    }
}