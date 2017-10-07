import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoIndexComponent } from './todo-index/todo-index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	TodoDetailComponent, 
  	TodoListComponent, TodoIndexComponent
  ]
})
export class TodosModule { }
