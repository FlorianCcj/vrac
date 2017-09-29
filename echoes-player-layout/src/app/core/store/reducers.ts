import { Observable } from 'rxjs/Observable';
// reducers
import { AppPlayerState, player, AppPlayerActions } from './app-player';
import { IAppSettings, appLayout, AppLayoutActions } from './app-layout';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
  player: AppPlayerState;
  appLayout: IAppSettings;
};

export let EchoesReducers = {
  player,
  appLayout,
};

export let EchoesActions = [
  AppPlayerActions,
  AppLayoutActions
];

export function getAppLayout$ ($state: Observable<EchoesState>): Observable<IAppSettings> {
  return $state.select(state => state.appLayout);
};
