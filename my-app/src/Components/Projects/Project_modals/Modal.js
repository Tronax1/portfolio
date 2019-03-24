import React, { Component } from 'react';

import './Modal.css'

export default class Modal extends Component{
    onClose = (e)=>{
        this.props.onClose && this.props.onClose(e);
    }   
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <React.Fragment>
                <div className = "Background">
                    <div className="Contents">
                        <div className="Header">
                            <button className = "Close" onClick = {(e) => {this.onClose(e)}}>
                                    < i className = "fas fa-times fa-2x" > </i>
                                </button>
                        </div>
                        <div className="Body">
                            <img className= "ModalImg" src={this.props.img} alt=""/>
                            {this.props.info}
                        </div>    
                        <div className="Footer">
                            < a className = "Repos" rel = "noopener noreferrer" 
                            target ="_blank" href = {this.props.repo}>
                                View source < i className = "fab fa-github fa-2x" > </i>
                            </a>
                        </div>
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}
