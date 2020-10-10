import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MapLocationComponent } from 'app/pages/ka-components/map-location/map-location.component';


@NgModule({
  declarations: [
    MapLocationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: "apikey",
        libraries: ["places"]
      }),
      FormsModule,
      CommonModule,
      BrowserModule,
      ReactiveFormsModule
  ],
  exports: [
    MapLocationComponent
  ]
})
export class KAComponentsModule { }
