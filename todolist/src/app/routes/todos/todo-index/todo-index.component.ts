import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { TodosActions } from "../../../core/store/todos/todos.actions";
import { TodosEffects } from "../../../core/store/todos/todos.effects";

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
    private todosActions: TodosActions,
    private todosEffects: TodosEffects
  ) {
  	this.store.dispatch(this.todosActions.getTodos());
    this.todos = store.select("todos");
    /*this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( action ) => action.type === this.todosActions.addTodoSuccess().type);*/
  }

  ngOnInit() {
  }

  addTodo( todo ) {
    this.store.dispatch(this.todosActions.addTodo(todo));
  }

}
