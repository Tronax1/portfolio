import React, { Component } from 'react'

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
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            email: '',
            subject: '',
            message: '',
        })
    }
    render() {
        return (
            <div>
                <form className="Form-background" onSubmit={this.handleSubmit}>
                    <h1>CONTACT ME</h1>
                    <input type="email" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email}/>
                    <input type="text" placeholder="Subject" name="subject" onChange={this.handleChange} value={this.state.subject}/>
                    <textarea rows="10" cols="30" placeholder="Message" name="message" onChange={this.handleChange} value={this.state.message}></textarea>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
