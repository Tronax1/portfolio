import React, { Component } from 'react'
import axios from 'axios';

import '../../Styles/ContactForm.css'

export default class ContactForm extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            subject: '',
            message: '',
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async handleSubmit(e){
        e.preventDefault();
        const {email, subject, message} = this.state;
        this.setState({
            email: '',
            subject: '',
            message: '',
        })
        await axios.post('/api/form', {
            email,
            subject,
            message
        });
    }
    render() {
        return (
            <div>
                <form className="Form-background" onSubmit={this.handleSubmit}>
                    <h1>CONTACT ME</h1>
                    <input type="email" placeholder="Email" name="email" id="field-1" 
                    maxLength="50" onChange={this.handleChange} value={this.state.email} required/>
                    <input type="text" placeholder="Subject" name="subject" id="field-2" 
                    maxLength="50" onChange={this.handleChange} value={this.state.subject} required/>
                    <textarea rows="10" cols="30" placeholder="Message" name="message" id="field-3" 
                    maxLength="250" onChange={this.handleChange} value={this.state.message} required></textarea>
                    <input type="submit" id="field-4" className="Submit-form" value="Submit" />
                </form>
            </div>
        )
    }
}
