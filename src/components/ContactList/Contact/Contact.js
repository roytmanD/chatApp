import React from 'react';


//stylesheet
import "./Contact.css";

class Contact extends  React.Component{
    constructor(props){
        super(props);
    }

    toChatRoom = () =>{

        this.props.onContactClick( this.props.contact);
    }


    render() {

        console.log(this.props);
        return (
            <li className='contact-wrapper'>
                <div onClick={this.toChatRoom} className='contact-name'>{this.props.contact}</div>
            </li>
        );
    }

}


export default Contact;
