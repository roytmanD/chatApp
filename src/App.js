import React from 'react';
import './App.css';

//myComponents
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import ContactList from './components/ContactList/ContactList';
import Chat from "./components/Chat/Chat";


//otherComponents
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends  React.Component{
constructor(props){
    super(props);
     this.state = {mode: 'NON-AUTH'} //OG
    // this.state = {mode: 'CONTACT-LIST'}//test
    //this.state = {mode: 'CHAT-ROOM'}//test
}

    onContactClick = (contact,e) =>{
    if(!contact) {
        e.preventDefault();
        e.stopPropagation();
    }
        this.setState({mode: 'CHAT-ROOM', chatWith: contact});
    }

    onAuth = (username) => {
    this.setState({mode: 'CONTACT-LIST', currUser: username});
    }

    onSignOut = () => {
    sessionStorage.clear();
    this.setState({mode: "NON-AUTH", currUser: null});
    }

    backToContacts = () => {
    this.setState({mode: 'CONTACT-LIST', chatWith: null});
    }

  render() {

    if(sessionStorage.getItem("authStatus")==="AUTH" && this.state.mode === "NON-AUTH"){
        this.setState({mode:"CONTACT-LIST"});
    }

    console.log(this.state)

    switch (this.state.mode) {
        case "NON-AUTH":
            return(
                <Router>
                    <div className='App'>
                        <Switch>
                            <Route path='/auth'><Login auth={this.onAuth}/></Route>
                            <Route path='/' exact><Login auth={this.onAuth}/></Route>
                            <Route path='/sign-up'><Registration auth={this.onAuth}/></Route>
                        </Switch>
                    </div>
                </Router>
            );

        case 'CONTACT-LIST':
            return (
                <ContactList signOut={this.onSignOut} toChatRoom={e => this.onContactClick(e)}/>
            );

        case "CHAT-ROOM":
            return(
                <Chat companion={this.state.chatWith} currUser={this.state.currUser} back={this.backToContacts}/>
            );

        default:

            return (
                <p>SOMETHING WENT WRONGGG (default case at App render fires) </p>
            );

    }
  }
}


export default App;


