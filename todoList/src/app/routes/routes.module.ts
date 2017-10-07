import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoComponent, TodosComponent]
})
export class RoutesModule { }
