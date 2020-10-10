import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { CommonModule } from '@angular/common';

import { panelRouting } from './panel.routing';

import { AccountComponent } from './account/account.component';
import { AdvertiserComponent } from './advertiser/advertiser.component';
import { EventsComponent } from './events/events.component';
import { PanelComponent } from './panel.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "app/pages/participant/guards/auth.guard";

@NgModule({
  declarations: [
    ProfileComponent,
    PanelComponent,
    EventsComponent,
    AdvertiserComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    panelRouting,
  ],
  exports:[
    ProfileComponent,
    PanelComponent,
    EventsComponent,
    AdvertiserComponent,
    AccountComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class PanelModule { }
