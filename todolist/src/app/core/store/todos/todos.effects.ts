import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs/Observable";
import { TodosActions } from "./todos.actions";
import {of} from "rxjs/observable/of";
import { TodosService } from "../../services/todos.service";

@Injectable()
export class TodosEffects {
  constructor(
    private todosActions: TodosActions,
    private actions$ : Actions,
    private todosService : TodosService 
  ) { }

  @Effect() 
  getTodos$ = this.actions$
    .ofType(TodosActions.GET_TODOS)
    .switchMap((action) => 
      this.todosService.getTodos()
        .map((todos) => (this.todosActions.getTodosSuccess(todos)))
        .catch(() => Observable.of(this.todosActions.getTodosError()))
   
    );

   /*@Effect() 
   addTodo$ = this.actions$
    .ofType(TodosActions.ADD_TODO)
    .switchMap(action =>
      this.todosService.addTodo(action.payload.title)
        .map(todo => (this.todosActions.addTodoSuccess()))
        .catch(() => Observable.of(this.todosActions.addTodoError())));*/
}
