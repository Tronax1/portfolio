import React, { Component } from 'react'
import { sendEmail } from '../../actions'
import {connect} from 'react-redux'

import '../../Styles/ContactForm.scss'

class ContactForm extends Component {
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
        const contactDetails = this.state;
        this.props.sendEmail(contactDetails);
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
                    <h1>{this.props.language ? ("CONTACT ME") : ("CONTACTAME")}</h1>
                    <input type="email" placeholder={this.props.language ? ("Email"):("Correo")} name="email" id="field-1"
                        maxLength="50" onChange={this.handleChange} value={this.state.email} required />
                    <input type="text" placeholder={this.props.language ? ("Subject"):("Sujeto")} name="subject" id="field-2"
                        maxLength="50" onChange={this.handleChange} value={this.state.subject} required />
                    <textarea rows="10" cols="30" placeholder={this.props.language ? ("Message"):("Mensaje")} name="message" id="field-3"
                        maxLength="250" onChange={this.handleChange} value={this.state.message} required></textarea>
                    <input type="submit" id="field-4" className="Submit-form" value={this.props.language ? ("Submit"):("Enviar")} />
                </form>
            </div>
        )
    }
}
function mapStatetoProps({language}){
    return {language};
}
export default connect(mapStatetoProps, {sendEmail})(ContactForm);
