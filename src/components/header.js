import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, NavItem,Collapse, Jumbotron, Button, Modal, ModalHeader, ModalBody,
    Form, Label, Input, FormGroup } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen: false
        };

    }


    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="./assets/images/logo.png" height="30" width="41" alt="Ristornate Con" />
                        </NavbarBrand>
                        <Collapse isOpen ={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                 </NavItem>
                                 <NavItem>
                                 <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                 </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"> Login </span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;