import {FETCH_LANGUAGE} from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case FETCH_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
}