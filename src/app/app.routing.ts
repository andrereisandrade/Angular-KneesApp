import { RefleshTokenComponent } from './pages/reflesh-token/reflesh-token.component';
import{ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import{HomeComponent} from './pages/home/home.component';
import{LoginComponent} from './pages/login/login.component';
import { MapLocationComponent } from "app/pages/ka-components/map-location/map-location.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'login', component: LoginComponent},
    {path: 'atualizatoken', component: RefleshTokenComponent},
    {path: 'mapa', component: MapLocationComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
