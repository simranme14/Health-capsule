import { textAlign } from '@mui/system';

import axios from 'axios';

import React from 'react';

import { Button } from 'react-bootstrap';

import EscalationAssigneeComponent from './EscalationAssigneeComponent';




//import EsaclationsService from '../services/EsaclationsService';

// const data =

//     {

//     userid: 'PV065487'

// }

 class Reason extends React.Component{




     // user = "AG061408"

      constructor(props){

           super(props);

             this.state = {

               user: ['PV065487']

           };

       }

     

       postdata= ()=>{

        axios.get('')

       }

       render(){

          return(

              <div>

                <textarea style={{width:130, height:130}} placeholder = "Reason for escalation miss..."></textarea>

                <Button onClick={this.props.postdata} >Submit</Button>

              </div>



          )

      }




 }



 export default Reason