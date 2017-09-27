package de base :
npm i ngrx/store ngrx/core --save-dev
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
Composant
- reactive : fait le taff
- dump : affiche et c'est tout, ne va pas recuperer les data n'affiche que ce qu'y lui a été envoyé
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
Reducer : 
fonction recuperant un state et une action et renvoit grosso merdo un nouveau state
il faut une interface permetant de formater le state d'entree
un switch dans la fonction du reducer

import { ActionReducer, Action } from '@ngrx/store';
import { YoutubeVideosActions } from './youtube-videos.actions';

export interface EchoesVideos extends Array<GoogleApiYouTubeVideoResource> {};
export function YoutubeVideosReducer (state: EchoesVideos = [], action: Action): ActionReducer<EchoesVideos> {
    switch (action.type) {
      case YoutubeVideosActions.ADD:
        return [...state, ...action.payload];
      case YoutubeVideosActions.RESET:
        return [];
      default:
        return state;
    }
  };

  

-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
Action : 
detient un type et un payload
du coup un generateur d'action

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
@Injectable()
export class YoutubeVideosActions {
	static ADD = '[YoutubeVideos] ADD_VIDEOS';
	static RESET = '[YoutubeVideos] RESET';
	addVideo(videos: GoogleApiYouTubeVideoResource[]): Action {
		return {
			type: YoutubeVideosActions.ADD,
			payload: videos
		};
	}
	reset(): Action {
		return {
			type: YoutubeVideosActions.RESET
		};
	}
}

Dans les service :
On subscribe au requete et dire on dispatch
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
un index avec tout les export
export * from './youtube-videos.reducer';
export * from './youtube-videos.actions';
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
module recuperant tout les store

import {YoutubeVideosReducer, YoutubesVideosActions} from './youtube-videos';

const actions = [ YoutubeVideosActions ];
const reducers = [ YoutubeVideosReducer ];

@NgModule({
  imports: [StoreModule.provideStore(reducers),],
  declarations : [],
  exports: [],
  providers: [ ...actions ]
})
export class CoreStoreModule {};

-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
Utilisation du store en composant

constructor(
  private youtubeVideosActions: YoutubeVideosActions,
  private store: Store<EchoesState>
) {}

NgOnInit() {
  this.videos$ = this.store.select(state => state.YoutubeVideosReducer);
  this.store.dispatch(this.youtubeVideosActions.addVideos(YoutubeMediaItemsMock)); // import d'un mock de jeu de donnee
}

-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
service

@Injextable()
export class NowPlaylistService {
  public playlist$: Observable<YoutubeMediaPlaylist>;

  constructor (
    public store Store<EchoesState>;
    private nowPlaylistActions: NowPlaylistActions
  ) { this.playlist$ = this.store.select(state => nowPlaylist); }
  
  queueVideos(medias: GoogleApiYoutubeVideoResource[]) {
    this.store.dispatch(this.nowPlaylistActions.queueVideos(medias));
  }
  
  removeVideo(media) {
    this.store.dispatch(this.nowPlaylistActions.removeVideo(media));
  }
  selectVideo(media) {
    this.store.dispatch(this.nowPlaylistActions.selectVideo(media));
  }
}

action corespondant

@Injectable()
export class NowPlaylistActions {

  static QUEUE = '[NOW PLAYLIST] QUEUE';
  static QUEUE_LOAD_VIDEO_SUCCESS = '[NOW PLAYLIST] QUEUE_LOAD_VIDEO_SUCCESS';
  static SELECT = '[NOW PLAYLIST] SELECT';
  static REMOVE = '[NOW PLAYLIST] REMOVE';
  static UPDATE_INDEX = '[NOW PLAYLIST] UPDATE_INDEX';
  static QUEUE_FAILED = '[NOW PLAYLIST] QUEUE_FAILED';
  static FILTER_CHANGE = '[NOW PLAYLIST] FILTER_CHANGE';
  static REMOVE_ALL = '[NOW PLAYLIST] REMOVE_ALL';
  static SELECT_NEXT = '[NOW PLAYLIST] SELECT_NEXT';
  static SELECT_PREVIOUS = '[NOW PLAYLIST] SELECT_PREVIOUS';
  static QUEUE_VIDEOS = '[NOW PLAYLIST] QUEUE_VIDEOS';
  queueVideo(media: GoogleApiYouTubeVideoResource): Action {
    return {
      type: NowPlaylistActions.QUEUE,
      payload: media
    };
  }
}

reducer correspondant

export function nowPlaylist ( state: YoutubeMediaPlaylist = initialState, action: Action) {
  let isDifferent = (media: GoogleApiYouTubeVideoResource) => media.id !== action.payload.id;
  switch (action.type) {
    case NowPlaylistActions.SELECT:
      return Object.assign({}, state, { index: action.payload.id });
	case NowPlaylistActions.REMOVE:
	  return Object.assign({}, state, { videos: state.videos.filter(isDifferent) });
	default:
	  return state;
  }
}




























Les links reccount useless qui m'insuporte
l'asistana
le pl
la voix d'horlanden + "le 4p"
la perte de temps
le multi rl

 https://chatons.org/