import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: Page1Component }
]);
