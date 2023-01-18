import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "./cards";
import "./Home.css";
import EscalationAssigneeComponent from "./EscalationAssigneeComponent";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import CustomizedDialogs from "./Modal";
//import Popout from './components/Popout';
//import bg from './1.jpg'
import CommitmentAssigneeComponent from './commmitments';
import PotentialAssigneeComponent from './Potentialclosures';
import CommunicationAssigneeComponent from './Communication';
import ManagerAssigneeComponent from './Managervisibility';
import FreshInboundAssignee from './FreshInboundAssignee';
import FreshInflowAssignee from './FreshInflowAssignee';
import axios from 'axios';
import Notinflowassignee from "./Notinflowassignee";
import Countescmanager from "./Countescmanager";
import Countinbmanager from "./Countinbmanager";
import Countinfmanager from "./Countinfmanager";
import FreshInboundManager from "./FreshInboundManager";
import FreshInflowManager from "./FreshInflowManager";
import EscalationManagerComponent from "./EscalationManagerComponent";
import Communicationmanager from "./Communicationmanager";
import Countcommduemanager from "./Countcommmanager";
import Clock from "./Clock";

const time = new Date().toLocaleTimeString();

const data = [
  {

    id: "Escalations",

    background: "#ff9ebb",

    innerbg: "#ff0000",

    // innerbg: "white",

    bordercolor: "red",

    mainText: "Escalations",

    secondaryText: "To be managed",

    time: 3,

    notifcation: <Countescmanager />,

    link: '/escalation-assignee',

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

    notifcation: <Countinfmanager />,

    link: '/inbound-assignee'

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

    notifcation: <Countinbmanager />,

    link: '/inbound-assignee'

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

    notifcation: <Countcommduemanager />,

    link: '/communication-assignee'

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

    notifcation: 0,

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

    notifcation: 0,

    link: '/potential-assignee'



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

    notifcation: 0,

    link: '/manager-assignee'

  },

];

class HomeM extends React.Component {
  //   const [open, setOpen] = useState("");
  constructor(props) {
    super(props);
    const user = localStorage.getItem("userId");
    this.state = { 
      user: user,
      open: "",
      esc: [],
      name: []
    };

    this.setOpen = this.handleChange.bind(this);
  }

  componentDidMount() {

    axios.get(`http://localhost:8080/api/totalescalation/${this.state.user}`)

      .then(response => response.data)

      .then((data) => {

        this.setState({ esc: data });

      });

    axios.get(`http://localhost:8080/api/managername/${this.state.user}`)

      .then(response => response.data)

      .then((data) => {

        this.setState({ name: data });

      });
  }

  handleChange(data) {
    this.setState({ open: data });
  }

  render() {
    return (
      <div className="Home">
        <Navbar />
        <div className='button5'>
                    <p></p>
                     <Link to="/delegation">
                        <Button id="delegation" className="float-left" variant="success" size="sm">
                Delegation Request
                </Button>   </Link> 
           </div>

        <div className="homebo">
          <div className="homebg">
            <div className="heading">
              {/* <p className="subhead">Associate's View</p> */}
              <div style={{ textAlign: "end", fontWeight: 900 }}><Clock /></div>
            </div>
          </div>
          <div className="welcome_text" style={{ marginLeft: "10px", textAlign: "left" }}>
            <h2>Welcome {this.state.name.map((esccount) => (esccount))}!!</h2>
            {/* <p id="p1">
              You have overall {this.state.esc.map((esccount) => (esccount))} tasks and 3 notifications today!
              {/* <Button className="float-right" variant="success" size="sm">
                    Delegation Request
                </Button>
                 
            </p> */}
          </div>

          <div clasName="card-modal" style={{ padding: "5px", display: "flex", flexWrap: "wrap" }}>
            {data.map((val) => {
              return (
                <Card
                  id={val.id}
                  setOpen={this.setOpen}
                  background={val.background}
                  innerbg={val.innerbg}
                  bordercolor={val.bordercolor}
                  mainText={val.mainText}
                  secondaryText={val.secondaryText}
                  time={val.time}
                  notifcation={val.notifcation}
                />
              );
            })}
          </div>
        </div>
        {this.state.open === "Escalations" ? (
          <EscalationManagerComponent setOpen={this.setOpen} />
        ) : null}
        {this.state.open === "Inbound" ? (
          <FreshInboundManager setOpen={this.setOpen} />
        ) : null}
        {this.state.open === "Inflow" ? (
          <FreshInflowManager setOpen={this.setOpen} />
        ) : null}
        {this.state.open === "Communication" ? (
          <Communicationmanager setOpen={this.setOpen} />
        ) : null}
      </div>
    );
  }
}

export default HomeM;
