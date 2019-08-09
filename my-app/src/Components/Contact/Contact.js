import React, { Component } from 'react'
import Delay from '../Animation/Delay'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Delay/>
                <ContactForm/>
            </div>
        )
    }
}
