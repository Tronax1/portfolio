import {FETCH_LANGUAGE} from './types';
import axios from 'axios';

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
export const sendEmail = (contact) => async dispatch=>{
    const { email, subject, message } = contact;
    await axios.post('/api/form', {
        email,
        subject,
        message
    });
}