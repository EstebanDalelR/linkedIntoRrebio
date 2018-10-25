import React, { Component } from 'react';
import axios from "axios";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import profiledata from "./people/estebandalelr.json";

export default class Header extends Component {
    /* CORS WILL NOT ALLOW THIS TO GO THROUGH WITHOUT A BACKEND
    componentWillMount() {
        axios.get('https://torre.bio/api/people/estebandalelr',
            {
                headers: {
                    "X-Auth-Token": "1-d2bb0926c06e41e572eb50f02e49938b900a31ea-1-6XBMhAlIlswJsrwNo5XhAJCveUD7G2i3kfif8WjpTOMYAXGTCy0A2nijfuNS7Tx98SXjmM5E6bex6raHHVN64J1XNfGUH/P0YBkb2TrS+4aMfQ4AdKqnvXBGjUafylv/FhL/6e876IfDs1HIdIPi04QiLgab94vV7s8Wf+rivGLR5i8gD8FfEP4whQUygK+cXsqg7tHBCAh/1WlK3gTH+KCxUM5dqxSO/0hExwg4nDDAGMu/iG/Jxf6dBn2StkRYjKc2gqNJcdoDh0Osin/D0fBY1J0Xa+P8ryhS0dG7gpVHvqWmRCHGhteR/sMRSrQrj69NQM8vnuiU5S+byKaBACq418nB6FUIYinX15j3kr/1LZp3UwXJyapabzzRVhH0cI5tVMqWEqj0HGti2MVKFU3bUKs/OroMKTU+azPAm/DJhTV5T64/xNpnjGq0Iwa287EoXo0njmEpzPbeYCvGGFutvixSEFYVZ2Dkd4nIrMf3hO3uJUjydYd+5yEy6Xco182k2M15wioV0veJo+7udqNbxxKf9UVm6xXc5pb6PaIFIC1AcRNC3IFPVR9b9BtoMPs5+SUlmTNWkx6rGVJ2TRbTKQeMlsEn1LtbLRHbCbmqiTqD7e3V9PrQz/iTpVRwpXX+9rbsC+FGJYnVLSMbuih7PijfOIflFaO0grRq"
                }
            })
            .then(function (response) {
                this.setstate({profiledata:response});
            })
            .catch(function (error) {
                console.log(error);
            });
    } */
    render() {
        return (
            <div style={{
                borderColor: "gray",
                borderRadius: "2px",
            }}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
               
        {profiledata.person.name}
                        </Typography>
                    </Toolbar>
                </AppBar>

            </div>
        )
    }
}