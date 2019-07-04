import React from 'react';
import {MsgBox} from "./msg-box/MsgBox";
import './ChatContainer.css';

class ChatContainer extends React.Component{

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="chat-container">
                <ul className='msg-list'>
                {this.props.messages.map(message =>{
                    return <MsgBox message = {message[0]} author = {message[1]}/>
                })}
                </ul>
            </div>
        );
    }

}


export default ChatContainer;
