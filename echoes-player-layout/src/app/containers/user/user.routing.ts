import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AuthGuard } from './user.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'user', component: UserComponent,
    children: [
    { path: '', redirectTo: 'playlists', pathMatch: 'full' }
  ]}
]);
