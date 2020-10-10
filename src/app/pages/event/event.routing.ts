import { DetailComponent } from 'app/pages/event/detail/detail.component';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';

const eventRoutes: Routes = [
    { path: 'evento', component: ListComponent },
    { path: 'evento/:id', component: DetailComponent },
];

export const eventRouting = RouterModule.forChild(eventRoutes);