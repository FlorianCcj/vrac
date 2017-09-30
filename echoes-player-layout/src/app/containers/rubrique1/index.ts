import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { AppHeaderModule } from '../app-header';
import { Page1Component } from './page1.component';
import { Article1Component } from './article1.component';
import { TypeAheadComponent } from './typeahead.directive';
import { LoadingIndicatorComponent } from './loading-indicator';
import { routing } from './rubrique1.routing';

@NgModule({
  imports: [
    SharedModule,
    AppHeaderModule,
    routing
  ],
  declarations: [
    Page1Component,
    Article1Component,
    TypeAheadComponent,
    LoadingIndicatorComponent
  ],
  exports: [
    Page1Component
  ],
  providers: []
})
export class Rubrique1Module { }
