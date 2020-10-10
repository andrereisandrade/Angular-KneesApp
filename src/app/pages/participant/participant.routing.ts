import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

const participantRoutes: Routes = [
  { path: 'participante', component: ListComponent },
  { path: 'participante/:id', component: FormComponent }
];

export const participantRouting = RouterModule.forChild(participantRoutes);
