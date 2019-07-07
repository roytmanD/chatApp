import React from 'react';

const BASE_URL = 'http://localhost:3000/chatapp/api';

class Registration extends React.Component{


    signUp(){
const pwdInput = document.querySelector('#password').value;
const usernameInput = document.querySelector('#username').value;


    const url = `${BASE_URL}/users/new?username=${usernameInput}&password=${pwdInput}`;

  fetch(url,
      {method:'post',
          body: JSON.stringify({username: usernameInput, password:pwdInput})
      }).then(response=>response.text().then(signUpStatus=>{
          if(signUpStatus==='SUCCESS'){
              alert('Welcome!');
              sessionStorage.setItem('authStatus', 'AUTH');
              sessionStorage.setItem('currUser', usernameInput);
              this.auth(usernameInput);
          }else if(signUpStatus==='FAIL. TOKEN EXISTS'){
              alert(signUpStatus +'Registration failed! Username already exists');
          }else{
              alert('Something went wrong!');
          }

  })).catch(err=>{
      console.log(err);
  });

    }

    auth = (username) => {
        this.props.auth(username);
    }


    render() {
        return(
            <form className='registration-form'>
                <h1 className='text-center'>Create account</h1>
                <div>
                    <label>Username</label>
                    <input id='username' type='text' placeholder='Username'/>
                </div>
                <div>
                    <label>Password</label>
                    <input id='password' type='password' placeholder='Password'/>
                </div>
                <button onClick={this.signUp}>Sign up</button>
                <label>Already have account?</label>
                <a href='/auth'>Log in</a>

            </form>
        );
    }

}

export default Registration;
