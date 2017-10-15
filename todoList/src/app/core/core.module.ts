import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {todos, TodosState} from './store/todos/todos.reducer'
import {TodosEffects} from './store/todos/todos.effects';
import {TodosActions} from './store/todos/todos.actions';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TodosService} from './services/todos.service'

export interface AppState {
	todos: TodosState
}

const effects = [
	TodosEffects
];

const reducers: ActionReducerMap<AppState> = {
	todos: todos
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
  	TodosActions,

	],
  declarations: []
})
export class CoreModule { }
