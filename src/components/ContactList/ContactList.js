import React from 'react';
import uuid from 'uuid';

//myComponents
import Contact from './Contact/Contact';

//styleSheet
import "./ContactList.css";

class ContactList extends  React.Component{
    constructor(props){
        super(props);
        this.state = {contacts:[]}
    }

    handleSignOut = () =>{
        this.props.signOut();
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
                <button onClick={this.handleSignOut}>Sing out</button>
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
