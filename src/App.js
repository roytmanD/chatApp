import React from 'react';
import './App.css';

//myComponents
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import ContactList from './components/ContactList/ContactList';
import ChatRoom from './components/ChatRoom/ChatRoom';

//otherComponents
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



class App extends  React.Component{
constructor(props){
    super(props);
     this.state = {mode: 'NON-AUTH'} //OG
    // this.state = {mode: 'CONTACT-LIST'}//test
    //this.state = {mode: 'CHAT-ROOM'}//test
}

    onContactClick = () =>{
        this.setState({mode: 'CHATROOM'});
    }
  render() {

    switch (this.state.mode) {
        case "NON-AUTH":
            return(
                <Router>
                    <div className='App'>
                        <Switch>
                            <Route path='/auth'><Login/></Route>
                            <Route path='/' exact><Login/></Route>
                            <Route path='/sign-up'><Registration/></Route>
                        </Switch>
                    </div>
                </Router>
            );
            break;

        case 'CONTACT-LIST':
            return (
                <ContactList/>
            );

            break;

        case "CHAT-ROOM":
            return(
                <ChatRoom/>
            );

            break;

        default:

            return (
                <p>SOMETHING WENT WRONGGG</p>
            );

    }
  }
}




export default App;


