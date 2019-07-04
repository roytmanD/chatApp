import React from 'react';

class Registration extends React.Component{


    signUp(){
const emlInput = document.querySelector('#email').value;
const pwdInput = document.querySelector('#password').value;
const usernameInput = document.querySelector('#username').value;

    }


    render() {
        return(
            <form className='registration-form'>
                <h1 className='text-center'>Create your Jupitter account</h1>

                <formGroup>
                    <label>Email</label>
                    <input id='email' type='email' placeholder='Email'/>
                </formGroup>

                <formGroup>
                    <label>Password</label>
                    <input id='password' type='password' placeholder='Password'/>
                </formGroup>

                <formGroup>
                    <label>Username</label>
                    <input id='username' type='text' placeholder='Username'/>
                </formGroup>
                <button onClick={this.signUp}>Sign up</button>
                <label>Already have account?</label>
                <a href='/auth'>Log in</a>

            </form>
        );
    }

}

export default Registration;
