import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Login } from './../../models/login';

import { ParticipantService } from './../../service/participant.service';
import { AdvertiserService } from './../../service/advertiserService';
import { FBService } from './../../service/fb.service';
import { AuthenticationService } from './../../service/authentication.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {

	accountType: any = { advertiser: false, participant: true };
	private login: Login = new Login();

	constructor(
		private fbService: FBService,
		private participantService: ParticipantService,
		private advertiserService: AdvertiserService,
		private authentication: AuthenticationService,
		private router: Router,
		private route: ActivatedRoute) {
		authentication.teste = 'gorda'
	}

	userForm = new FormGroup({
		email: new FormControl(),
		password: new FormControl(),
	});

	toogleAccount(account) {
		if (account === 'participant') {
			this.accountType.participant = true;
			this.accountType.advertiser = false;
		} else {
			this.accountType.participant = false;
			this.accountType.advertiser = true;
		}
	}

	serverLogin() {
		this.authentication.serverLogin(this.userForm.value)
			.subscribe(login => {
				this.login = login;
				this.authentication.setItemLocalStorage(JSON.stringify(login))
				setTimeout(() => this.redirectToDashboard(login), 2000)
			}, error => {
				console.log('Erro ao logar')
			});
	}
	facebookLogin() {
		this.authentication.facebookLogin()
			.then(res => setTimeout(() => this.redirectToDashboard(res), 2000));
	}

	redirectToDashboard(login) {
		console.log(login);
		if (this.login.permition == '1') {
			console.log('Ainda em desenvolvimento');
		} else if (this.login.permition == '2') {
			this.router.navigate(['participante/painel/perfil'])
		} else {
			this.router.navigate(['anunciante/painel/perfil'])

		}
	}

	create() {
		if (this.accountType.participant) {
			this.router.navigate(['/participante/novo'])
		} else {
			this.router.navigate(['/anunciante/novo'])
		}
	}
	createFacebook() {
		this.authentication.facebookLogin()
			.then(res => {
				if (this.accountType.participant) {
					this.participantService.createParticipantByFacebook()
						.then(res => setTimeout(() => this.redirectToDashboard(res), 2000));
				} else {
					this.advertiserService.createAdvertiserByFacebook()
						.then(res => setTimeout(() => this.redirectToDashboard(res), 2000));
				}
			});
	}
}
