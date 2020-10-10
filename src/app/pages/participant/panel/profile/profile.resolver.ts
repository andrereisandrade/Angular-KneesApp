import { AuthenticationService } from 'app/service/authentication.service';
import { Participant } from 'app/models/participant';
import { RouterStateSnapshot } from '@angular/router/router';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable()

export class ProfileResolver implements Resolve<Participant> {


    constructor(private auth: AuthenticationService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.auth.getItemLocalStorage();
    }
}


class AppModule { }