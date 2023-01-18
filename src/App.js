//import React, {useState, useEffect} from 'react';
import './App.css';
//import EsaclationComponent from './components/EsaclationComponent';

import EscalationAssigneeComponent from './components/EscalationAssigneeComponent'
import EscalationManagerComponent from './components/EscalationManagerComponent';
import HomeAssociate from './components/HomeAssociate';
import Home from './components/Home';
import HomeManager from './components/HomeManager';
import LoginComponent from './components/LoginComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginManager from './components/LoginManager';
import Delegation from './components/delegationcomp';
import CommitmentAssigneeComponent from './components/commmitments';
import ManagerAssigneeComponent from './components/Managervisibility';
import PotentialAssigneeComponent from './components/Potentialclosures';
import CommunicationAssigneeComponent from './components/Communication';
import FreshInboundAssignee from './components/FreshInboundAssignee';
import FreshInflowAssignee from './components/FreshInflowAssignee';
import HomeM from './components/HomeM';
import Logintest from './components/Logintest';
import Communication from './components/Communication';
import Loginmtest from './components/Loginmtest';
import Communicationmanager from './components/Communicationmanager';
import FreshInboundManager from './components/FreshInboundManager';
import FreshInflowManager from './components/FreshInflowManager';

function App() {
  return (
    
    
    <div className="App" >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Logintest />} />
        <Route path="/delegation" element={<Delegation />} /> 
        <Route path="/loginmanager" element={<Loginmtest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homemanager" element={<HomeM />} />
        <Route path="/escalation-assignee" element={<EscalationAssigneeComponent/>} />
        <Route path="/escalation-manager" element={<EscalationManagerComponent/>} />
        <Route path="/commitment-assignee" element={<CommitmentAssigneeComponent/>} />
        <Route path="/manager-assignee" element={<ManagerAssigneeComponent/>} />
        <Route path="/potential-assignee" element={<PotentialAssigneeComponent/>} />
        <Route path="/inbound-assignee" element={<FreshInboundAssignee/>} />
        <Route path="/communication-assignee" element={<Communication />} />
        <Route path="/inflow-assignee" element={<FreshInflowAssignee/>} />
        <Route path="/inflow-manager" element={<FreshInflowManager/>} />
        <Route path="/inbound-manager" element={<FreshInboundManager/>} />
        <Route path="/communication-manager" element={<Communicationmanager/>} />
        <Route path="/inflow-assignee" element={<FreshInflowAssignee/>} />
        
        


        

       


          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
