import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {todos, TodosState} from './store/todos/todos.reducer'
import {visibilityFilter} from './store/todos/visibility-filter.reducer'
import {TodosEffects} from './store/todos/todos.effects';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TodosService} from './services/todos.service'

export interface AppState {
  todos: TodosState,
	visibilityFilter: any
}

const effects = [
	TodosEffects
];

const reducers: ActionReducerMap<AppState> = {
	todos,
  visibilityFilter
} 

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers : [
    TodosService,
	],
  declarations: []
})
export class CoreModule { }
