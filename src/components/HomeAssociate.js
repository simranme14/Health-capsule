import React, { useState, useEffect, useFetch } from 'react'
import { Button } from 'react-bootstrap'
import Card from './cards';
import './Home.css';
import EscalationAssigneeComponent from './EscalationAssigneeComponent';
import CommitmentAssigneeComponent from './commmitments';
import PotentialAssigneeComponent from './Potentialclosures';
import CommunicationAssigneeComponent from './Communication';
import ManagerAssigneeComponent from './Managervisibility';
import FreshInboundAssignee from './FreshInboundAssignee';
import FreshInflowAssignee from './FreshInflowAssignee';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import CustomizedDialogs from './Modal';
import { color, fontSize } from '@mui/system';
import Clock from './Clock';
//import Popout from './components/Popout';
//import bg from './1.jpg'
import axios from 'axios';

const value1 = axios.get('http://localhost:8080/api/demo/PV065487');

console.log(value1);

const time = new Date().toLocaleTimeString();

const data1 = [ 
    {
        id: "Escalations",
        background: "#ff9ebb",
        innerbg: "#ff0000",
        // innerbg: "white",
        bordercolor: "red",
        mainText: "Escalations",
        secondaryText: "To be managed",
        time: 3,
        notifcation: 3,
        link: '/escalation-assignee',
    },
    {
        id: "Commitment",
        background: "#fcefb4",
        innerbg: "#ffd100",
        //innerbg: "white",
        bordercolor: "#ffd100",
        mainText: "Commitments",
        secondaryText: "To be met",
        time: 1.5,
        notifcation: 5,
        link: '/commitment-assignee'
    },
    {
        id: "Closures",
        background: "#caffbf",
        innerbg: "#38b000",
        // innerbg: "white",
        bordercolor: "#38b000",
        mainText: "Potential Closures",
        fontSize: '10px', secondaryText: "To be converted",
        time: 21,
        notifcation: 3,
        link: '/potential-assignee'

    },
    {
        id: "Inbound",
        background: "#dee2e6",
        innerbg: "#495057",
        // innerbg: "white",
        bordercolor: "#495057",
        mainText: "Fresh Inbound",
        secondaryText: "To be acknowledged ",
        time: 21,
        notifcation: 3,
        link: '/inbound-assignee'
    },
    {
        id: "Manager",
        background: "#9bf6ff",
        innerbg: "#3a0ca3",
        //innerbg: "white",
        bordercolor: "#3a0ca3",
        mainText: "Management Ask",
        secondaryText: "To be prioritized",
        time: 5,
        notifcation: 10,
        link: '/manager-assignee'
    },
    {
        id: "Communication",
        background: "#eae0d5",
        innerbg: "#5e503f",
        // innerbg: "white",
        bordercolor: "#5e503f",
        mainText: "Communication Due",
        secondaryText: "To be updated",
        time: 21,
        notifcation: 3,
        link: '/communication-assignee'
    },
    {
        id: "Inflow",
        background: "orange",
        innerbg: "#495057",
        // innerbg: "white",
        bordercolor: "#495057",
        mainText: "Fresh Inflow",
        secondaryText: "To be acknowledged",
        time: 21,
        notifcation: 3,
        link: '/inbound-assignee'
    },
];console.log(data1);
const Home = () => {
    const [open, setOpen] = useState("")
    return <div className="Home">
        <Navbar />
        <div className='homebo'>
            <div className='homebg'>
                <div className="heading">
                    <p className="subhead">Associate's View</p>
                    {/* <div style={{ textAlign: 'end', fontWeight: 900 }}><Clock /></div> */}
                    <Clock />

                </div>
            </div>

            <div className="welcome_text" style={{ marginLeft: '10px', textAlign: 'left' }}>
                {/* <h2>Welcome Preetam V!!</h2> */}
                <p id='p1'>You have overall 17 tasks and 3 notifications today!
                    {/* <Button className="float-right" variant="success" size="sm">
                Delegation Request
            </Button>
             */}
                </p>
            </div>
            <div clasName="card-modal" style={{ padding: '5px', display: 'flex', flexWrap: 'wrap' }}>
                {data1.map(val => {
                    return <Card id={val.id} setOpen={setOpen} background={val.background} innerbg={val.innerbg} bordercolor={val.bordercolor} mainText={val.mainText} secondaryText={val.secondaryText} time={val.time} notifcation={val.notifcation} />
                })}
            </div>

        </div>
        {open === "Escalations" ? <EscalationAssigneeComponent setOpen={setOpen} /> : null}
        {open === "Commitment" ? <CommitmentAssigneeComponent setOpen={setOpen} /> : null}
        {open === "Closures" ? <PotentialAssigneeComponent setOpen={setOpen} /> : null}
        {open === "Inbound" ? <FreshInboundAssignee setOpen={setOpen} /> : null}
        {open === "Manager" ? <ManagerAssigneeComponent setOpen={setOpen} /> : null}
        {open === "Communication" ? <CommunicationAssigneeComponent setOpen={setOpen} /> : null}
        {open === "Inflow" ? <FreshInflowAssignee setOpen={setOpen} /> : null}

    </div>
}
export default Home;