import {FETCH_LANGUAGE} from './types';

export const changeEnglish = () => dispatch =>{
    dispatch({
        type: FETCH_LANGUAGE,
        payload: true
    })
}
export const changeSpanish = () => dispatch =>{  
    dispatch({
        type: FETCH_LANGUAGE,
        payload: false
    })
}