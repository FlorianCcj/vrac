import { NowPlaylistEffects } from '../../effects/now-playlist.effects';
import {
  AppPlayerActions, AppPlayerState,
  getPlayerFullscreen$, getShowPlayer$,
  getPlayer$, getCurrentMedia$, getIsPlayerPlaying$
} from '../../store/app-player';
import { EchoesState } from '../../store';
import { Store } from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { YoutubePlayerService } from '../../services';

@Component({
  selector: 'app-player',
  styleUrls: [ './app-player.scss' ],
  template: `
  <!-- FOOTER BANDE DE CON -->
  <section 
    [class.show-youtube-player]="isShowPlayer$ | async"
    [class.fullscreen]="(isPlayerFullscreen$ | async).on">
    <div class="container-fluid">
      <media-info class="col-md-5 col-xs-6"
        [player]="player$ | async"
        [minimized]="media$ | async"
        (thumbClick)="toggleFullScreen()"
      ></media-info>
    </div>
  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPlayerComponent implements OnInit {
  player$ = null;
  media$ = null;
  isPlayerPlaying$ = null;
  isPlayerInRepeat$ = null;
  isPlayerFullscreen$ = null;
  isShowPlayer$ = null;

  @HostBinding('class.youtube-player') style = true;

  constructor(
    private playerService: YoutubePlayerService,
    private playerActions: AppPlayerActions,
    private store: Store<EchoesState>,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(this.playerActions.reset());
  }
}
