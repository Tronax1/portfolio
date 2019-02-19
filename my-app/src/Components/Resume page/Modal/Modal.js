import React from 'react'

import './Modal.css'

export default class Modal extends React.Component{
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
                            <button onClick = {(e) => {this.onClose(e)}}>
                                    Close
                                </button>
                        </div>
                        <div className="Body">
                            {this.props.children}
                        </div>    
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}