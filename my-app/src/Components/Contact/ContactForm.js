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
                    <input type="email" placeholder="Email" name="email" id="field-1" onChange={this.handleChange} value={this.state.email}/>
                    <input type="text" placeholder="Subject" name="subject" id="field-2" onChange={this.handleChange} value={this.state.subject}/>
                    <textarea rows="10" cols="30" placeholder="Message" name="message" id="field-3" onChange={this.handleChange} value={this.state.message}></textarea>
                    <button id="field-4" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
