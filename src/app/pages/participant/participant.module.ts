import { ProfileResolver } from './panel/profile/profile.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

// Routes
import { participantRouting } from './participant.routing';

// Components

import { panelRouting } from './panel/panel.routing';
import { PanelModule } from './panel/panel.module';

import { FormComponent } from './form/form.component';
import { ListComponent } from "app/pages/participant/list/list.component";
import { AuthGuard } from "app/pages/participant/guards/auth.guard";



@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    participantRouting,
    PanelModule,
    TextMaskModule
  ],
  exports: [
    FormComponent,
  ],
  providers: [
    AuthGuard,
    ProfileResolver
  ]
})
export class ParticipantModule { }
