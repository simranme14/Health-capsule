import React from 'react';

import axios from 'axios';

import './escalation.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

import Navbar from './Navbar';

//import EsaclationsService from '../services/EsaclationsService';

import CustomizedDialogs from './Modal';

class FreshInboundAssignee extends React.Component {

    constructor(props) {

        super(props);

        const user = localStorage.getItem("userId");
        this.state = {
            user: user,

            esc: []

        };

    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/freshinbound/${this.state.user}`)

            .then(response => response.data)

            .then((data) => {

                this.setState({ esc: data });

            });

    }

    render() {
        return (
            <CustomizedDialogs popupOpen={true} setOpen={this.props.setOpen}>
                <MDBTable style={{ overflow: 'auto', zoom: '75%' }}>
                    <MDBTableHead>
                        <tr>
                            <td style={{whiteSpace: 'nowrap'}}>Universal_ID</td>
                            <td style={{whiteSpace: 'nowrap'}}>Assignee Name</td>
                            <td style={{whiteSpace: 'nowrap'}}>Assignee Group</td>
                            <td style={{whiteSpace: 'nowrap'}}>Status</td>
                            <td style={{whiteSpace: 'nowrap'}}>Summary</td>
                            <td style={{whiteSpace: 'nowrap'}}>Last Inbound</td>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            this.state.esc.map((escalate) => (
                                <tr key={escalate.Assignee_ID}>
                                    <td><a href={`https://supportal.cerner.com/#SRM/QV?ItemView/${escalate[0]}`} target="_blank">{escalate[0]}</a>

                                    </td>
                                    <td>{escalate[1]}</td>
                                    <td>{escalate[3]}</td>
                                    <td style={{whiteSpace: 'nowrap'}}>{escalate[4]}</td>
                                    <td>{escalate[5]}</td>
                                    <td style={{whiteSpace: 'nowrap'}}>{escalate[6]}</td>

                                </tr>
                            ))
                        }
                    </MDBTableBody>
                </MDBTable>
            </CustomizedDialogs>
        )
    }

}

export default FreshInboundAssignee