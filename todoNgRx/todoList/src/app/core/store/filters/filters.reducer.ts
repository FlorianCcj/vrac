import {Filters} from "../../../interfaces/filters";
import {TEXT_UPDATE, ALL, STATUS_UPDATE} from "./filters.actions";

const initialState: Filters = {
    text: '',
    status: ALL
};

export const filters:any = (state = initialState,  {type, payload}) => {
    switch (type){
        
        case TEXT_UPDATE:
            return Object.assign({}, state, {text: payload});

        case STATUS_UPDATE:
            return Object.assign({}, state, {status: payload});
        
        default:
            return state;
    }
};
