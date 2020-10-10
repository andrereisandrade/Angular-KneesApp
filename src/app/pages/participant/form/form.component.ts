import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Participant } from "app/models/participant";
import { ParticipantService } from "app/service/participant.service";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  participantForm: FormGroup; //Using it in ngOnInit{...}

  participant: Participant = new Participant();

  // Phone's Mask:
  maskPhone: any[] = ['(', /[1-9]/, /\d/, ')', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];





/*//  Não funciona ainda:
//  public participantForm = this.fb.group({});

  inputFields(myForm) {
    if (myForm.getValue("birthDate").match("^[0-3]?[0-9]/[0-3]?[0-9]/(?:[0-9]{2})?[0-9]{2}$")) {
        var split = myForm.getValue("birthDate").split('/');
        myForm.setValue("birthDate", split[2] + '-' + split[1] + '-' + split[0]);
    }
}
*/

  save() {
    if (this.participant.id) {
      this.updateParticipant();
    } else {
      this.createParticipant();
    }
  }

  cancel() {
    this.router.navigate(['participante']);
  }

  updateParticipant() {
    this.ParticipantService.updateParticipant(this.participant).subscribe(
      data => {
        console.log("salvo com sucesso");
        this.router.navigate(['participante/painel/perfil']);
      },
      error => {
        console.error("Error saving food!");
        this.router.navigate(['participante/painel/perfil']); //Criar uma página de erro ?
      }
    );
  }

  createParticipant() {
    this.ParticipantService.createParticipant(this.participant).subscribe(
      data => {
        console.log("salvo com sucesso");
        this.router.navigate(['participante/painel/perfil']);
      },
      error => {
        console.error("Error saving food!");
        this.router.navigate(['participante/painel/perfil']); //Criar uma página de erro ?
      }
    );
  }

  getParticipant() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.ParticipantService.getParticipant(id)
        .subscribe(
        participant => this.participant = participant,
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

  constructor(
    private ParticipantService: ParticipantService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {   }

  ngOnInit() {
    this.getParticipant();
    //this.inputFields(this.participantForm);

    this.participantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required]],
      phone: ['', []],
      birthDate: ['', []],
      termsAndConditions: ['', [Validators.requiredTrue]]
    },{
      validator: PasswordValidation.MatchPassword // validation method to confirm_password input
    })
 }
}

export class PasswordValidation {
  
      static MatchPassword(AC: AbstractControl) {
         let password = AC.get('password').value; // to get value in input tag
         let confirm_password = AC.get('confirm_password').value; // to get value in input tag
          if(password != confirm_password) {
              //console.log('false');
              AC.get('confirm_password').setErrors( {MatchPassword: true} )
          } else {
              //console.log('true');
              return null
          }
      }
  }