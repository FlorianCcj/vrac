import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { AppHeaderModule } from '../app-header';

import { UserComponent } from './user.component';

import { AuthGuard } from './user.guard';
import { UserPlayerService } from './user-player.service';
import { routing } from './user.routing';

@NgModule({
  imports: [
    SharedModule,
    AppHeaderModule,
    routing
  ],
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [ AuthGuard, UserPlayerService ]
})
export class UserModule { }
