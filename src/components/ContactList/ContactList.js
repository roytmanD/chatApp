import React from 'react';


//myComponents
import Contact from './Contact/Contact';

//styleSheet
import "./ContactList.css";

const contacts = [
    'Mum', 'Dad', 'Pizza', 'Food delivery', 'Plumber',
    'Friend1', 'Friend2','Friend3', 'Friend4', 'Friend5', 'Friend6'
];//HC yet

class ContactList extends  React.Component{


    render() {
        return (
            <div className="contact-list-wrapper">
                <ul className='contact-list'>
                    {contacts.map(contact=>{
                        return <Contact contact={contact}/>
                    })}
                </ul>
            </div>
        );
    }
}


export default ContactList;
