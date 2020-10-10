import { User } from './../../../models/user';
import { AuthenticationService } from 'app/service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    user: User = new User();
    logged = false;

    constructor(private authService: AuthenticationService) { 
        // this.authService.teste = 'asdfasdfa'
        console.log(this.authService.teste)

    }

    ngOnInit() {
        this.isLogged()
    }

    isLogged() {
        this.user = this.authService.getItemLocalStorage();
        if (this.user) {
            this.logged = true;
        }
    }

    logout() {
        this.authService.logout();
        this.logged = false;
        window.location.reload();
    }

}
