import React from 'react';

//myComponents
import ChatContainer from './ChatContainer/ChatContainer';
import {NewMsgBar} from './NewMsgBar/NewMsgBar';
const messages = [
        ['hi','user1'], ['hi', 'user2'], ['hru?', 'user1'],
        ['fine, u?','user2'], ['great! heard the last news?', 'user1'], ['no, whats new?', 'user2'],
        ['nevermind. nothing interesting','user1'], ['ok. bye!', 'user2'], ['bye-bye!', 'user1'],
    ]; //HC YET

class ChatRoom  extends React.Component{

    render() {
        return(
            <div className='chatroom-wrapper'>
                <ChatContainer messages={messages}/>
                <NewMsgBar/>
            </div>
        );
    }

}


export default ChatRoom;
