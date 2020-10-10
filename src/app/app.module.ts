import { KAComponentsModule } from './pages/ka-components/ka-components.module';
import { AgmCoreModule } from '@agm/core';
import { FBService } from './service/fb.service';
import { PlaceService } from './service/place.service';
import { SlickModule } from 'ngx-slick';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';
import { SelectModule } from 'ng2-select';

// modulo
import { ParticipantModule } from './pages/participant/participant.module'
import { AdvertiserModule } from './pages/advertiser/advertiser.module';

// Routes
import { routing } from './app.routing';
import { eventRouting } from 'app/pages/event/event.routing';


// services
import { ParticipantService } from './service/participant.service';
import { EventService } from './service/event.service';
import { AuthenticationService } from './service/authentication.service';
import { AdvertiserService } from './service/advertiserService';


// Pages
import { FooterComponent } from './pages/include/footer/footer.component';
import { AppComponent } from './pages/app.component';
import { MenuComponent } from './pages/include/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/event/list/list.component';
import { EventModule } from "app/pages/event/event.module";
import { RefleshTokenComponent } from './pages/reflesh-token/reflesh-token.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    RefleshTokenComponent,
  ],
  imports: [
    KAComponentsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ParticipantModule,
    AdvertiserModule,
    EventModule,
    eventRouting,
    EventModule,
    FacebookModule.forRoot(),
    SlickModule.forRoot(),
    SelectModule
  ],
  providers: [
    PlaceService,
    ParticipantService,
    AuthenticationService,
    FBService,
    EventService,
    AdvertiserService,
    { provide: LOCALE_ID, useValue: "pt-BR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
