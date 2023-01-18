import React from 'react';

import axios from 'axios';

import CustomizedDialogs from './Modal';
//import EsaclationsService from '../services/EsaclationsService';

class Communicationmanager extends React.Component{

    constructor(props){
        super(props);
        const user = localStorage.getItem("userId");
        this.state = {
            user: user,
            esc: []
        };
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/api/commduemanager/${this.state.user}`)
        .then(response => response.data)
        .then((data) => {
            this.setState({esc: data});
        });
    }

    render(){
        return(

            <CustomizedDialogs popupOpen={true} setOpen={this.props.setOpen}>
                <table style={{overflow:'auto', zoom:'65%'}}>
                    <thead>
                        <tr>
                            <td style={{whiteSpace: 'nowrap'}}>Universal_ID</td>
                            <td style={{whiteSpace: 'nowrap'}}>Assignee_ID</td>
                            <td style={{whiteSpace: 'nowrap'}}>Assigned_Name</td>
                            <td style={{whiteSpace: 'nowrap'}}>Assigned_Group</td>
                            <td style={{whiteSpace: 'nowrap'}}>Client</td>
                            <td style={{whiteSpace: 'nowrap'}}>Summary</td>
                            <td style={{whiteSpace: 'nowrap'}}>Status</td>
                            <td style={{whiteSpace: 'nowrap'}}>Communication_Due</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.esc.map((escalate) =>(
                                <tr key={escalate.Assignee_ID}>
                                    {/* <td><a href='https://supportal.cerner.com/#SRM/QV?ItemView/439355112' target="_blank">{escalate[0]}</a></td> */}
                                    <td><a href={`https://supportal.cerner.com/#SRM/QV?ItemView/${escalate[0]}`} target="_blank">{escalate[0]}</a></td>
                                    <td>{escalate[1]}</td>
                                    <td>{escalate[2]}</td>
                                    <td>{escalate[3]}</td>
                                    <td style={{whiteSpace: 'nowrap'}}>{escalate[4]}</td>
                                    <td>{escalate[5]}</td>
                                    <td style={{whiteSpace: 'nowrap'}}>{escalate[6]}</td>
                                    <td style={{whiteSpace: 'nowrap'}}>{escalate[7]}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </CustomizedDialogs>
        )
    }

}

export default Communicationmanager