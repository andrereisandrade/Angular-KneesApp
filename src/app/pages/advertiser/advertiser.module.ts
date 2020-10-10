import { FormComponent } from './form/form.component';
import { PanelModule } from './panel/panel.module';
import { advertiserRouting } from './advertiser.routing';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertiserListComponent } from './advertiser-list/advertiser-list.component';
import { AdvertiserDetailsComponent } from './advertiser-details/advertiser-details.component';


@NgModule({
  declarations: [
    FormComponent,
    AdvertiserListComponent,
    AdvertiserDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    advertiserRouting,
    PanelModule
  ],
  exports: [
    FormComponent
  ]
})
export class AdvertiserModule { }