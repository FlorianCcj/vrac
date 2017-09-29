import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared';

import { AppPlayerComponent } from './app-player.component';
import { MediaInfoComponent } from './media-info';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AppPlayerComponent,
    MediaInfoComponent,
  ],
  exports: [
    AppPlayerComponent
  ]
})
export class AppPlayerModule { }
