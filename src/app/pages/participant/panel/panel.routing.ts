import { AuthGuard } from './../guards/auth.guard';
import { AccountComponent } from './account/account.component';
import { Routes, RouterModule } from '@angular/router';

import { AdvertiserComponent } from './advertiser/advertiser.component';
import { EventsComponent } from './events/events.component';
import { PanelComponent } from './panel.component';
import { ProfileComponent } from './profile/profile.component';

const PanelRoutes: Routes = [
  {
    path: 'participante/painel', component: PanelComponent,
    children: [
      { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'eventos/confirmado', component: EventsComponent },
      { path: 'anunciantes/seguido', component: AdvertiserComponent },
      { path: 'conta', component: AccountComponent }
    ]
  },
];

export const panelRouting = RouterModule.forChild(PanelRoutes);