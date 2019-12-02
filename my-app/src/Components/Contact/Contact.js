import React from 'react'
import { useEffect } from 'react'
import Footer from '../Footer/Footer'

import ContactForm from './ContactForm'

export default function Contact() {
    useEffect(() => window.scrollTo(0, 0));
        return (
            <div className="page">
                <ContactForm/>
                <Footer/>
            </div>
        )
}
