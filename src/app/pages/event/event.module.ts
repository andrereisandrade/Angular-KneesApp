import { KAComponentsModule } from './../ka-components/ka-components.module';
import { PanelModule } from './../advertiser/panel/panel.module';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StarRatingModule } from 'angular-star-rating';
import { SelectModule } from 'ng2-select';
import { SlickModule } from 'ngx-slick';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DetailComponent } from 'app/pages/event/detail/detail.component';
import { ListComponent } from "app/pages/event/list/list.component";
import { eventRouting } from "app/pages/event/event.routing";


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    KAComponentsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    eventRouting,
    SlickModule.forRoot(),
    BsDatepickerModule.forRoot(),
    StarRatingModule.forRoot(),
    SelectModule
  ],
  exports: [

  ]
})
export class EventModule { }
