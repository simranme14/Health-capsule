import React, { useState } from "react";

import axios from 'axios';

import './escalation.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

import Navbar from './Navbar';

//import EsaclationsService from '../services/EsaclationsService';

import CustomizedDialogs from './Modal';

class Notescalationassignee extends React.Component {

    constructor(props) {

        super(props);

        const user = localStorage.getItem("userId");
        this.state = { 
        user: user,

            esc: []

        };

    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/countescalation/${this.state.user}`)

            .then(response => response.data)

            .then((data) => {

                this.setState({ esc: data });

            });
    }

    render() {
        return (
            <div>               
            {this.state.esc.map((esccount) => (esccount))}
            </div>
        )
    }

}

export default Notescalationassignee