import React from 'react';

const BASE_URL = 'http://localhost:3000/chatapp/api';



class Login extends React.Component{
constructor(props){
    super(props);
}

    auth = (username) => {
    this.props.auth(username)
    }

    logIn = () =>{
        const usernameInput = document.querySelector('#username').value;
        const pwdInput = document.querySelector('#password').value;
       const url = `${BASE_URL}/users/auth?username=${usernameInput}&password=${pwdInput}`;

        fetch(url).then(res => res.text().then(authStatus=>{
            if(authStatus==="SUCCESS"){
                alert('Welcome!');
                sessionStorage.setItem('authStatus', 'AUTH');
                sessionStorage.setItem('currUser', usernameInput);

                this.auth(usernameInput);
            }else{
                alert("Invalid username or password!");
            }
        }))

    }


    render() {

        return(
            <div className='login-form'>
                <h1>Join chat</h1>

                <div>
                    <label>Username</label>
                    <input  id='username' type='text' placeholder='Username'/>
                </div>

                <div>
                    <label>Password</label>
                    <input id='password' type='password' placeholder='Password'/>
                </div>

                <button onClick={this.logIn} >Log in</button>
                <div className='text-center'>
                    New to Chat?
                    <a href='/sign-up'>Sign up</a>
                    <span className='p-2'></span>
                </div>
            </div>
        );
    }

}

export default Login;
