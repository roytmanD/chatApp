import React from  'react';
import './MsgBoxStyle.css';


class UserPic extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(<div className='user-pic'>{this.props.author}</div>);
    }

}


export class MsgBox extends React.Component{
    render(){
        return(
            <li className='msg-item'>
            <span className="msg-box">
                <UserPic author={this.props.author}></UserPic>
                <div className="text-wrapper">
                    <div className="text">{this.props.message}</div>
                </div>
            </span>
                </li>
        );
    }
}


