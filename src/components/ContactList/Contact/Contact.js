import React from 'react';

//stylesheet
import "./Contact.css";

class Contact extends  React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <li className='contact-wrapper'>
                <a onClick={this.props.onContactClick} href="#" className='contact-name'>{this.props.contact}</a>
            </li>
        );
    }

}


export default Contact;
