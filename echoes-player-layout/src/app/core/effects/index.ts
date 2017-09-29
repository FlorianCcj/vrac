import { EffectsModule } from '@ngrx/effects';

import { AppPlayerEffects } from './app-player.effects';
import { AppSettingsEffects } from './app-settings.effects';

export const AppEffectsModules = [
  EffectsModule.run(AppPlayerEffects),
  EffectsModule.run(AppSettingsEffects)
];
