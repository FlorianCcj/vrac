import {TodosActions} from './todos.actions'

const initialState = {
  data: [],
  pending: false,
  error: null
}

export function todos( state = initialState, { type, payload } ) {
  switch( type ) {
    case TodosActions.GET_TODOS:
      return Object.assign({}, state, {pending: true, error: null})
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