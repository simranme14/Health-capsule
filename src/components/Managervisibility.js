
import React from 'react';
import axios from 'axios';
//import './escalation.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

import './commitments.css';
import { Routes, Route, Link } from 'react-router-dom';
import CustomizedDialogs from './Modal';
//import EsaclationsService from '../services/EsaclationsService';

class ManagerAssigneeComponent extends React.Component {
    render (){
        return (
            <CustomizedDialogs popupOpen={true} setOpen={this.props.setOpen}>


<table>
    <tr>
    <th>Ticket Number</th>
        <th>Assignee Name</th>
        <th>Assigned Group</th>
        <th>Status</th>
    </tr>
    <tr>
        <td>
            <a href="https://supportal.cerner.com/#SRM/QV?ItemView/428504322">428504322</a>
        </td>
        <td> Pritham </td>
        <td> STCL_NJ</td>
        <td> In progress </td>
    </tr>
    <tr>
        <td>
            <a href="https://supportal.cerner.com/#SRM/QV?ItemView/426802248">426802248</a>
        </td>
        <td>Pritham</td>
        <td> RMHO_TX</td>
        <td> In progress </td>
    </tr>
    <tr>
        <td>
            <a href="https://supportal.cerner.com/#SRM/QV?ItemView/426895712">426895712</a>
        </td>
        <td> Pritham </td>
        <td> STCL_NJ</td>
        <td> In progress </td>
    </tr>

</table>

</CustomizedDialogs>) }
           
    }

export default ManagerAssigneeComponent;