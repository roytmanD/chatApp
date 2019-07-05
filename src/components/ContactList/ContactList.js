import React from 'react';
import $ from 'jquery';
import uuid from 'uuid';

//myComponents
import Contact from './Contact/Contact';

//styleSheet
import "./ContactList.css";

const contacts = [
    'Mum', 'Dad', 'Pizza', 'Food delivery', 'Plumber',
    'Friend1', 'Friend2','Friend3', 'Friend4', 'Friend5', 'Friend6'
];//HC yet

class ContactList extends  React.Component{
    constructor(props){
        super(props);
        this.state = {contacts:contacts}
    }

componentDidMount() {
    const url = "http://localhost:3000/chatapp/api/users";
    fetch(url).then(res=>res.json()).then(jsonResponse =>{
        console.log(jsonResponse);
        this.setState({contacts:jsonResponse.data})
    })

}

    render() {
        return (
            <div className="contact-list-wrapper">
                <ul className='contact-list'>
                    {this.state.contacts.map(contact=>{
                        return <Contact onContactClick={this.props.toChatRoom} key={uuid()} contact={contact}/>
                    })}
                </ul>
            </div>
        );
    }
}


export default ContactList;
