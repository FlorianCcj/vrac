import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {todos} from './store/todos/todos.reducer'
import {TodosEffects} from './store/todos/todos.effects';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TodosService} from './services/todos.service'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({todos}),
    EffectsModule.run(TodosEffects),
  ],
  providers : [TodosService],
  declarations: []
})
export class CoreModule { }
