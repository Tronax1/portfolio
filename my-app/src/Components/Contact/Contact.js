import React, { Component } from 'react'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    componentWillUnmount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="page">
                <ContactForm/>
            </div>
        )
    }
}
