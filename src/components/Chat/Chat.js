//stylesheet
import "./Chat.css";
//libs
import React from "react";
import io from "socket.io-client";
import uuid from 'uuid';


//var username = 'miki'; // TODO HC YET BUT SHOULD GO FROM SESSION STORAGE AT LEAST
//var companion = 'johnny'; //HC TOO should be not
class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: this.props.currUser,
            message: '',
            messages: []
        };

        this.socket = io('localhost:5000');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
         this.handleBack = () =>{
            this.props.back();
        }

    }
    render(){

        console.log(this.props.companion);
        return (
            <div className="container">
                <div className="row">
                    <div className="card-header">
                    <button onClick={this.handleBack}>Back</button>
                    <p>My socket ID: {this.socket.id}</p>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Chat with {this.props.companion}</div>
                            </div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div
                                                className={this.props.currUser === message.author ? 'myMessage' : 'message'}
                                                key={uuid()}>
                                                {this.props.currUser === message.author ?
                                                    `${message.author} : ${message.message}` :
                                                    `${message.message} : ${message.author}` }
                                                {/*{message.author}: {message.message}*/}
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                {/*<input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>*/}
                                <br/>
                                <input type="text" placeholder="Message" className="msg-input" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn-send">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
