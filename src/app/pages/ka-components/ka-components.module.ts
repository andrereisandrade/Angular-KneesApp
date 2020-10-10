
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from "@agm/core";
import { MapLocationComponent } from "app/pages/ka-components/map-location/map-location.component";

@NgModule({
  declarations: [
    MapLocationComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: "AIzaSyBgyhmaZ7VVV89vBsDRUt-83sdlLpVajrQ",
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
