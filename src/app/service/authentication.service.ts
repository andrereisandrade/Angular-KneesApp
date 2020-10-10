import { FBService } from './fb.service';
import { Participant } from 'app/models/participant';
import { Injectable } from '@angular/core';


import {
    Http,
    Response,
    Headers,
    RequestOptions
} from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Rx"
import { AppSettings } from "app/config/appSettings";
import { User } from "app/models/user";

@Injectable()
export class AuthenticationService {

    private user: User = new User();
    teste: string;

    constructor(
        private fbService: FBService,

        private http: Http) {

    }

    serverLogin(login) {
        login.clientId = AppSettings.CLIENT_ID;
        login.clientSecurity = AppSettings.CLIENT_SECURITY
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(login);
        return this.http.post(AppSettings.URL_BASE + "login", body, options)
            .map((res: Response) => {
                this.setItemLocalStorage(JSON.stringify(res.json()))
                return res.json();
            });
    }

    facebookLogin() {
        return this.fbService.facebookLogin()
            .then(res => {
                console.log(res)
                this.saveUserFacebook()
            })
            .catch(this.handleError);
    }

    logout() {
        localStorage.clear();
    }

    refleshToken() {
        return this.fbService.facebookLogin()
            .then((res: any) => this.reflesh(res.authResponse.accessToken).subscribe())
            .catch(this.handleError);
    }

    reflesh(token) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(token);
        return this.http.post(AppSettings.URL_BASE + "usuario/token", token, options)
            .map((res: Response) => res.toString());

    }


    saveUserFacebook() {
        this.fbService.getUser()
            .then((res: any) => {
                res.photo = "https://graph.facebook.com/" + res.id + "/picture?width=180&height=180";
                res.facebookLogin = true;
                this.setItemLocalStorage(JSON.stringify(res));
            })
            .catch(this.handleError);
    }

    setItemLocalStorage(body) {
        localStorage.setItem(AppSettings.KEY_NAME, body)
    }

    getItemLocalStorage() {
        return JSON.parse(localStorage.getItem(AppSettings.KEY_NAME));
    }


    private handleError(error) {
        console.error('Error processing action', error);
    }
}
