import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { AdvertiserListComponent } from './advertiser-list/advertiser-list.component';
import { AdvertiserDetailsComponent } from './advertiser-details/advertiser-details.component';


const advertiserRoutes: Routes = [
    { path: 'anunciante', component: AdvertiserListComponent },
    { path: 'anunciante/novo', component: FormComponent },
    { path: 'anunciante/:id', component: AdvertiserDetailsComponent }
];

export const advertiserRouting = RouterModule.forChild(advertiserRoutes);