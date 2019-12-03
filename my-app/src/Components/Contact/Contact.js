import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

import ContactForm from './ContactForm'

export default function Contact(props) {
    useEffect(() => window.scrollTo(0, 0), props.location);
        return (
            <div className="page">
                <ContactForm/>
                <Footer/>
            </div>
        )
}
