import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { EchoesState } from '../../core/store';

import { NowPlaylistActions } from '../../core/store/now-playlist';
import { AppPlayerActions } from '../../core/store/app-player';
import { PlayerSearchActions, PresetParam } from '../../core/store/player-search';
import { AppLayoutActions } from '../../core/store/app-layout';
// selectors
import { getPlayerSearch$, getPlayerSearchResults$, getNowPlaylist$ } from '../../core/store/reducers';

@Component({
  selector: 'page1',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './page1.component.scss' ],
  template: `
  <article
    infiniteScroll
    [infiniteScrollDistance]="2"
    (scrolled)="searchMore()"
    [immediateCheck]="true">
    <app-header>
      <div class="navbar-header">
        <article1
          [query]="playerSearch$ | async"
          (change)="resetPageToken()"
          (search)="search($event)"
        ></article1>
      </div>
    </app-header>
    <loading-indicator [isLoading]="(playerSearch$ | async).isSearching"></loading-indicator>
  </article>
  `
})
export class Page1Component implements OnInit {
  videos$ = this.store.let(getPlayerSearchResults$);
  playerSearch$ = this.store.let(getPlayerSearch$);
  playlist$ = null;
  // @State(getVideos$) videos$;
  // @State(getPlayerSearch$) playerSearch$;

  presets: PresetParam[] = [
    { label: 'Any', value: '' },
    { label: 'Albums', value: 'full album' },
    { label: 'Live', value: 'live' }
  ];

  constructor(
    private store: Store<EchoesState>,

    private appPlayerActions: AppPlayerActions,
    private appLayoutActions: AppLayoutActions,
    private playerSearchActions: PlayerSearchActions
  ) { }

  ngOnInit() {
    this.store.dispatch(this.playerSearchActions.searchCurrentQuery());
  }

  search (query: string) {
    this.store.dispatch(this.playerSearchActions.searchNewQuery(query));
  }

  playSelectedVideo (media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(this.appPlayerActions.loadAndPlay(media));
    // this.store.dispatch(this.nowPlaylistActions.selectVideo(media));
  }

  queueSelectedVideo (media: GoogleApiYouTubeVideoResource) {
    // this.store.dispatch(this.nowPlaylistActions.queueVideo(media));
  }

  removeVideoFromPlaylist(media: GoogleApiYouTubeVideoResource) {
    // this.store.dispatch(this.nowPlaylistActions.removeVideo(media));
  }
  resetPageToken() {
    this.store.dispatch(this.playerSearchActions.resetPageToken());
  }

  searchMore () {
    this.store.dispatch(this.playerSearchActions.searchMoreForQuery());
  }

  updatePreset(preset: PresetParam) {
    this.store.dispatch(this.playerSearchActions.updateQueryParam({ preset: preset.value }));
  }
}
