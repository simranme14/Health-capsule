import React, { useState } from "react";

import axios from 'axios';

import './escalation.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

import Navbar from './Navbar';

//import EsaclationsService from '../services/EsaclationsService';

import CustomizedDialogs from './Modal';

class Notinboundassignee extends React.Component {

    constructor(props) {

        super(props);

        const user = localStorage.getItem("userId");
        this.state = {
            user: user,

            inb: []

        };

    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/countinbound/${this.state.user}`)

            .then(response => response.data)

            .then((data) => {

                this.setState({ inb: data });

            });
    }

    render() {
        return (
            <div>
                {this.state.inb.map((inbcount) => (inbcount))}
            </div>
        )
    }

}

export default Notinboundassignee