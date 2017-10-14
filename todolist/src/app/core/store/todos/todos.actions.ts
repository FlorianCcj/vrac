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

	getTodos() {
	  return {
	    type: TodosActions.GET_TODOS
	  }
	}

	getTodosSuccess(data) {
		return {
			type: TodosActions.GET_TODOS_SUCCESS,
			payload: data
		}
	}

	getTodosError() {
		return {
			type: TodosActions.GET_TODOS_ERROR
		}
	}

	/*addTodo( title ): any {
	  return {
	    type: TodosActions.ADD_TODO,
	    payload: title
	  }
	}

	addTodoSuccess() {
	  return {
	    type: TodosActions.ADD_TODO_SUCCESS,
	  }
	}

	addTodoError() {
	  return {
	    type: TodosActions.ADD_TODO_ERROR,
	  }
	}*/
}