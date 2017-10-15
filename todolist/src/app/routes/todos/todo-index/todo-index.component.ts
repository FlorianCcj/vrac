import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as TodosActions from "../../../core/store/todos/todos.actions";
import { TodosEffects } from "../../../core/store/todos/todos.effects";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-todo-index',
  templateUrl: './todo-index.component.html',
  styleUrls: ['./todo-index.component.css']
})
export class TodoIndexComponent implements OnInit {

  todos : Observable<any>;
  addTodoSuccess$ : Observable<any>;

  constructor(
    private store : Store<any>,
    private todosEffects: TodosEffects
  ) {
  	this.store.dispatch(new TodosActions.GetTodos());
    this.todos = store.select("todos");
    this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( {type} ) => type === TodosActions.ADD_TODO_SUCCESS);
  }

  ngOnInit() {
  }

  addTodo( todo ) {
    this.store.dispatch(new TodosActions.AddTodo(todo));
  }

}
