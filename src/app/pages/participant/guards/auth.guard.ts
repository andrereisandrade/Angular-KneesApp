import { AuthenticationService } from 'app/service/authentication.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/router";
import { Router } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.hasPertission();
  }

  hasPertission() {
    console.log("caiu aki")
    return true;
    // if (this.authService.authenticationUser) {
    //   return true;
    // } else {
    //   this.router.navigate(['/login']);      
    //   return false;
    // }
  }
}
