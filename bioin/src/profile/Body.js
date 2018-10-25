import React, { Component } from 'react';
import axios from "axios";

import Typography from '@material-ui/core/Typography';

import profiledata from "./people/estebandalelr.json";
import Social from './people/Social.js';
import Strengths from './Strengths.js';

export default class Body extends Component {

    render() {
        return (
            <div style={{margin:10}}>
                <img height="65em" alt={`pic of the user ${profiledata.person.name}`} src={profiledata.person.picture}></img>
                <Social socials={profiledata.person.links}></Social>
                <Strengths strengths={profiledata.strengths}></Strengths>
            </div>
        )
    }
}