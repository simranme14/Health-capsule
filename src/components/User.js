import React from "react";





import EscalationAssigneeComponent from "./EscalationAssigneeComponent";





//import EsaclationsService from '../services/EsaclationsService';





// const data =





//     {





//     userid: 'PV065487'





// }





class User extends React.Component {



  // user = "AG061408"





  constructor(props) {



    super(props);



    const user = localStorage.getItem("userId")



    this.state = {



      user: user,



    };



  }





  render() {



    return <div>{this.state.user}</div>;



  }





  // render(){





  //     return(





  //         <EscalationAssigneeComponent userid ={data.userid} />





  //     )





  // }



}





export default User