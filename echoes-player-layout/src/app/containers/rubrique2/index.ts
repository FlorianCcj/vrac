import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { AppHeaderModule } from '../app-header';

import { Page2Component } from './page2.component';

import { Rubrique2Guard } from './rubrique2.guard';
import { UserPlayerService } from './user-player.service';
import { routing } from './rubrique2.routing';

@NgModule({
  imports: [
    SharedModule,
    AppHeaderModule,
    routing
  ],
  declarations: [
    Page2Component
  ],
  exports: [
    Page2Component
  ],
  providers: [ Rubrique2Guard, UserPlayerService ]
})
export class Rubrique2Module { }
