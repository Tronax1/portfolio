import {FETCH_LANGUAGE} from './types';

var english = true;
export const fetchLanguage = () => dispatch =>{
    console.log(english);
    dispatch({
        type: FETCH_LANGUAGE,
        payload: english
    })
}
export const changeLanguage = () => dispatch =>{
    
    if(!english){
        english = true;
    }
    else{
        english = false;
    }
    
}