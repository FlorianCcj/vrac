import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page2Component } from './page2.component';
import { Rubrique2Guard } from './rubrique2.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'user', component: Page2Component,
    children: [
    { path: '', redirectTo: 'playlists', pathMatch: 'full' }
  ]}
]);
