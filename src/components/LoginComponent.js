import React from 'react';
import axios from 'axios';

//import { Form, Button, FormGroup } from 'reactstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './login.css';

class LoginComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }
  saveUser() {
    localStorage.setItem("userId", this.state.value)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render(){
      return(
        <div id="loginform">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybmF8XaEsi2whAxSE4JZUH8dRWLxcS9aIRfHje4jvoHRAaAxa" width="50" height="50"/> <FormHeader title="Capsule Login" /> 
          <h2>Associate Login</h2>
          <Form />
        
        </div>
      )
    }
  }
  

  
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
     <div>
       <FormInput description="Username" placeholder="Enter your username" type="text" />
       <FormInput description="Password" placeholder="Enter your password" type="password"/>
       {/* <FormButton title="Log in"/> */}
       <p>
<p>

</p>
       </p>

<div className='buttons'>

        <Link to="/home"><button class="button button2" >Login</button></Link>  
       {/* <button ><Link to="/home"><input type="submit" value="Login" /></Link></button> */}
       <br></br><br></br>
        <Link to="/loginmanager"><button class="button button2" >Manager Login</button></Link>

        </div>

     </div>



  );
  
  const FormButton = props => (
    <div id="button" class="row">
      <button>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );
  
  
export default LoginComponent;