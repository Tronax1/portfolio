import React from 'react'
import { useState } from 'react';
import { sendEmail } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

import '../../Styles/ContactForm.scss'

export default function ContactForm(){
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const Lang = useSelector(state => state.language);
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        const contactDetails = {
            email,
            subject,
            message
        }

        dispatch(sendEmail(contactDetails));
        setEmail('');
        setSubject('');
        setMessage('');
    }
        return (
            <div>
                <form className="Form-background" onSubmit={handleSubmit}>

                    <h1>{Lang ? ("CONTACT ME") : ("CONTACTAME")}</h1>

                    <input type="email" placeholder={Lang ? ("Email"):("Correo")} name="email" id="field-1"
                        maxLength="50" onChange={(e)=>setEmail(e.target.value)} value={email} required />

                    <input type="text" placeholder={Lang ? ("Subject"):("Sujeto")} name="subject" id="field-2"
                        maxLength="50" onChange={(e)=>setSubject(e.target.value)} value={subject} required />

                    <textarea rows="10" cols="30" placeholder={Lang ? ("Message"):("Mensaje")} name="message" id="field-3"
                        maxLength="250" onChange={(e)=>setMessage(e.target.value)} value={message} required/>

                    <input type="submit" id="field-4" className="Submit-form" value={Lang ? ("Submit"):("Enviar")} />
                </form>
            </div>
        )
}
