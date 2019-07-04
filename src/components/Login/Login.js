import React from 'react';


class Login extends React.Component{


    logIn(){
        const usernameInput = document.querySelector('#username').value;
        const pwdInput = document.querySelector('#password').value;
        const q = {
                username: usernameInput,
                password: pwdInput
        };

    }

    render() {
        return(
            <form className='login-form'>
                <h1>Join chat</h1>

                <formGroup>
                    <label>Username</label>
                    <input  id='username' type='text' placeholder='Username'/>
                </formGroup>

                <formGroup>
                    <label>Password</label>
                    <input id='password' type='password' placeholder='Password'/>
                </formGroup>

                <button onClick={this.logIn} >Log in</button>
                <div className='text-center'>
                    New to Chat?
                    <a href='/sign-up'>Sign up</a>
                    <span className='p-2'></span>
                </div>
            </form>
        );
    }

}

export default Login;
