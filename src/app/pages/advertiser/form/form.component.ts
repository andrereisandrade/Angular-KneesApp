import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from '../../../service/advertiserService';
import { AuthenticationService } from 'app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  advertiserForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private advertiserService: AdvertiserService,
    private authentication: AuthenticationService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.advertiserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['']
    });
  }

  redirectToDashboard(data) {
    if (data.permition == 2) {
      this.router.navigate(['participante/painel/perfil'])
    } else {
      this.router.navigate(['anunciante/painel/perfil'])
    }
  }

  login(data) {
    this.authentication.serverLogin(data)
      .subscribe(data => {
        setTimeout(() => this.redirectToDashboard(data), 2000)
      }, error => {
        console.log('Erro ao logar')
      });
  }

  onSubmit() {
    this.advertiserService.createAdvertiser(this.advertiserForm.value).subscribe(data => {
      this.login(data);
    },
      error => {
        console.log(error);
      });
  }
}
