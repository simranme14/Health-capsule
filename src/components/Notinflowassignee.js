import React, { useState } from "react";

import axios from 'axios';

import './escalation.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

import Navbar from './Navbar';

//import EsaclationsService from '../services/EsaclationsService';

import CustomizedDialogs from './Modal';

class Notinflowassignee extends React.Component {

    constructor(props) {

        super(props);

        const user = localStorage.getItem("userId");
        this.state = {
            user: user,

            inf: []

        };

    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/countinflow/${this.state.user}`)

            .then(response => response.data)

            .then((data) => {

                this.setState({ inf: data });

            });
    }

    render() {
        return (
            <div>               
            {this.state.inf.map((infcount) => (infcount))}
            </div>
        )
    }

}

export default Notinflowassignee