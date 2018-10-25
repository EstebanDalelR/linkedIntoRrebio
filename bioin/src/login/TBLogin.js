import React, { Component } from 'react';
import torrelogo from './torrelogo.png';

export default class TBLogin extends Component {
    render() {
        return (
            <button>
                <img src={torrelogo} height="25em" alt="torrebio"></img>
                <p>Login with Torre</p>
            </button>
        )
    }
}