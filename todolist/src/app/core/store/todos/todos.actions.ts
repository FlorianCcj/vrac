import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class TodosActions {

	static GET_TODOS = "GET_TODOS";
	static GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
	static GET_TODOS_ERROR = "GET_TODOS_ERROR";

	static ADD_TODO = "ADD_TODO";
	static ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
	static ADD_TODO_ERROR = "ADD_TODO_ERROR";

	getTodos(): Action {
	  return {
	    type: TodosActions.GET_TODOS
	  }
	}

	addTodo( title ): any {
	  let test = {title}
	  return {
	    type: TodosActions.ADD_TODO,
	    payload: test
	  }
	}
}