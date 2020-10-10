import { KAComponentsModule } from './../../ka-components/ka-components.module';
import { SlickModule } from 'ngx-slick';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { SelectModule } from 'ng2-select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { EventManagementComponent } from './event-management/event-management.component';
import { PanelComponent } from './panel.component';
import { EventFormComponent } from './event-form/event-form.component';
import { AccountComponent } from './account/account.component';
import { AdvertiserProfileComponent } from './advertiser-profile/advertiser-profile.component';


import { panelAdvertiserRouting } from './panel.-advertiser.routing';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    PanelComponent,
    EventManagementComponent,
    AccountComponent,
    AdvertiserProfileComponent,
    EventFormComponent,
    ReportComponent,
  ],
  imports: [
    KAComponentsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    panelAdvertiserRouting,
    SlickModule.forRoot(),
    BsDatepickerModule.forRoot(),
    SelectModule
  ],
  exports:[
    PanelComponent,
    EventManagementComponent,
    AccountComponent,
  ]
})
export class PanelModule { }
