import React, { Component } from 'react';
import torrelogo from './torrelogo.png';

export default class Empty extends Component {
    render() {
        return (
            <div>
                {this.props.rendered}
            </div>
        )
    }
}