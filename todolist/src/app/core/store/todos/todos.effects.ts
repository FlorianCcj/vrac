import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as TodosActions from "./todos.actions";
import {of} from "rxjs/observable/of";
import { TodosService } from "../../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor(
    private actions$ : Actions,
    private todosService : TodosService 
  ) { }

  @Effect() 
  getTodos$ = this.actions$
    .ofType(TodosActions.GET_TODOS)
    .switchMap((action) => 
      this.todosService.getTodos()
        .map((todos) => (new TodosActions.GetTodosSuccess(todos)))
        .catch(() => Observable.of(new TodosActions.GetTodosError()))
   
    );

   @Effect() 
   addTodo$: Observable<Action> = this.actions$
    .ofType<TodosActions.AddTodo>(TodosActions.ADD_TODO)
    .switchMap(action => 
      this.todosService.addTodo(action.payload.title)
        .map(todo => (new TodosActions.AddTodoSuccess(todo)))
        .catch(() => Observable.of(new TodosActions.AddTodoError())));
}
