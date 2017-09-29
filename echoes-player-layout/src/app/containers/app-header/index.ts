import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { AppHeaderComponent } from './app-header.component';
import { AppHeaderMenuComponent } from './app-header-menu';
import { AppHeaderUserComponent } from './app-header-user';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AppHeaderComponent,
    AppHeaderMenuComponent,
    AppHeaderUserComponent
  ],
  exports: [
    AppHeaderComponent
  ]
})
export class AppHeaderModule { }
