import React from "react";

import axios from "axios";

//import { Form, Button, FormGroup } from 'reactstrap';

import { Routes, Route, Link } from "react-router-dom";

import './logintest.css';



class Loginmtest extends React.Component {



  constructor(props) {



    super(props);



    this.state = { value: "" };



 



    this.handleChange = this.handleChange.bind(this);



    this.handleSubmit = this.handleSubmit.bind(this);



    this.saveUser = this.saveUser.bind(this);



  }



 



  saveUser(){



    localStorage.setItem("userId",this.state.value)



  }



 



  handleChange(event) {



    this.setState({ value: event.target.value });



  }



 



  handleSubmit(event) {



    alert("A name was submitted: " + this.state.value);



    event.preventDefault();



  }



 



  render() {



    return (

      <div className="back">

      <div className="left-align">

      <div className="Login">



        <h1>Manager Login</h1>



        <form onSubmit={this.handleSubmit}>



          <label>



            Manager ID:



            <input



              type="text"



              value={this.state.value}



              onChange={this.handleChange}



             



            />



          </label>



         



          <label>



            Password:



            <input type="password" />



          </label>



         





            <Link to="/homemanager">





<button onClick={this.saveUser} class="button" >Login</button></Link>  




         



        </form>



     



       



          <Link to="/">



          <button class="button" >Associate Login</button>  



          </Link>



      </div>

</div>

</div>

    );



  }



}



 



export default Loginmtest