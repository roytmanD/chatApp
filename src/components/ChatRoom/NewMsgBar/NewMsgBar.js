import  React from 'react';

//styleSheet
import "./NewMsgBar.css";

export class SendBtn extends React.Component{

    render() {
        return(
            <div className='send-msg' onClick={this.props.handleClick} >
                <button className='send-btn'>Send</button>
            </div>);
    }
}


 class NewMsgBox extends React.Component{
    render() {
        return (
            <div className="new-msg-box">
                <input className='msg-input' placeholder="Type your message..."/>
            </div>
        );
    }
}

export class NewMsgBar extends React.Component{
    render() {
        return (
            <div className='new-msg-bar-wrapper'>
                <NewMsgBox/>
                <SendBtn/>
            </div>
        );
    }
}
