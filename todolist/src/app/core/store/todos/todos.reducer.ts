import * as TodosActions from './todos.actions'

export interface TodosState {
  data: any[];
  pending: boolean;
  error: any;
}

const initialState = {
  data: [],
  pending: false,
  error: null
}

export function todos( state = initialState, { type, payload } ): TodosState {
  switch( type ) {
    case TodosActions.GET_TODOS:
      return {...state, ...{pending: true, error: null}};
    case TodosActions.GET_TODOS_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false})
    case TodosActions.GET_TODOS_ERROR:
      return Object.assign({}, state, {pending: false, error: "Error"})
    case TodosActions.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, payload]
      });
    default:
      return state;
  }
}