
import React from 'react';
import axios from 'axios';
import CustomizedDialogs from './delegationmodel';

//import { Form, Button, FormGroup } from 'reactstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './login.css';


class Delegation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }



    render() {
        return (
            <CustomizedDialogs popupOpen={true} setOpen={this.props.setOpen}>

            <div>
                <h1>Delegation</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        SR Number:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><br></br>
                    <label>
                        Proposed Assignee:
                        <input type="text" />
                    </label><br></br>
                    {/* <button ><Link to="/homemanager"><input type="submit" value="Submit" /></Link></button> */}
                </form><br></br><br></br>
                
            </div>
            </CustomizedDialogs>
        );
    }
}

export default Delegation