import React, { Component } from 'react';
import linkedlogo from './linkedlogo.png';
import Empty from './Empty';

export default class LILogin extends Component {
    state={
        rendered:""
    }
    linkedInLogin() {
        fetch(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78fv0yx70zlaue&state=sdase23334&redirect_uri=http://localhost:3000/`)
            .then(data => <div dangerouslySetInnerHTML={data} />)
            .catch(error => console.error(error));
    }
    render() {
        return (
            <button
           >
            {this.linkedInLogin.bind(this)}
                <img src={linkedlogo} height="25em" alt="linkedin"></img>
                <p>Login with linkedIn</p>
            </button>
        )
    }
}