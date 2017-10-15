import * as VisibilityFilterActions from './visibility-filter.actions'

export const initialState: string = "SHOW_ALL"

export function visibilityFilter( state = initialState, { type, payload } ): string {
  switch( payload ) {
    case VisibilityFilterActions.SET_VISIBILITY_FILTER:
      return payload;
    default:
      return state;
  }
}