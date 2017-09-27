import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';

import { AppPlayerComponent } from './app-player.component';
import { MediaInfoComponent } from './media-info';
import { PlayerControlsComponent } from './player-controls/player-controls.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AppPlayerComponent,
    MediaInfoComponent,
    PlayerControlsComponent,
  ],
  exports: [
    AppPlayerComponent
  ]
})
export class AppPlayerModule { }
