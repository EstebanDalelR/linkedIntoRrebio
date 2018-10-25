import React, { Component } from 'react';
import TBLogin from './TBLogin';
import LILogin from './LILogin';

export default class LoginArea extends Component {
    render() {
        return (
            <div style={{
                borderColor:"gray",
                borderRadius: "2px",
            }}>
                <TBLogin/>
                <LILogin/>
            </div>
        )
    }
}