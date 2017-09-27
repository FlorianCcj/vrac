import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { ActionReducer, Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
// reducers
import { videos, YoutubeVideosActions, EchoesVideos } from './youtube-videos';

export interface EchoesState {
videos: EchoesVideos;
}
const actions = [
YoutubeVideosActions
];