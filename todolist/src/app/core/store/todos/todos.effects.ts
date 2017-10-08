
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { TodosActions } from "./todos.actions";
import 'rxjs/add/observable/of';

import { TodosService } from "../../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor(
    private todosActions: TodosActions,
    private actions$ : Actions, 
    private todosService : TodosService 
  ) { }

  @Effect() getTodos$ = this.actions$
    .ofType(TodosActions.GET_TODOS)
    .switchMap(action =>
      this.todosService.getTodos()
           .map(todos => ({type: TodosActions.GET_TODOS_SUCCESS, payload: todos}))
           .catch(() => Observable.of({type: TodosActions.GET_TODOS_ERROR})));

 	@Effect() addTodo$ = this.actions$
    .ofType(TodosActions.ADD_TODO)
    .switchMap(action =>
      this.todosService.addTodo(action.payload.title)
        .map(todo => ({type: TodosActions.ADD_TODO_SUCCESS, payload: todo}))
        .catch(() => Observable.of({type: TodosActions.ADD_TODO_ERROR})));
}
