import { EventFormComponent } from './event-form/event-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AdvertiserProfileComponent } from './advertiser-profile/advertiser-profile.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { PanelComponent } from "app/pages/advertiser/panel/panel.component";
import { AccountComponent } from "app/pages/advertiser/panel/account/account.component";


const PanelAdvertiserRoutes: Routes = [
  {
    path: 'anunciante/painel', component: PanelComponent, children: [
      { path: 'perfil', component: AdvertiserProfileComponent },
      { path: 'gerenciar/evento', component: EventManagementComponent },
      { path: 'evento/formulario', component: EventFormComponent },
      { path: 'conta', component: AccountComponent }
    ]
  },
];

export const panelAdvertiserRouting = RouterModule.forChild(PanelAdvertiserRoutes);