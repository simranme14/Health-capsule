import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const Navbar = () => {
    return <div className="Navbar" style={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between', marginLeft:20 }}>
        <div className='Notification'>
        <a href='#'>
            <i class="fa-solid fa-bell"></i><div className="NotificationBell" style={{
                width: 10,
                height: 10,
                position: 'relative',
                top: -32,
                right: -25,
                borderRadius: "100%",
                padding: 2,
                color:'black',
                border: '1px solid black',
                zindex:-2,
                backgroundColor: 'yellow',
                fontSize:'0.5em',
                textAlign:'center',
                fontWeight:800,                
            }}>6</div>
            </a>
        </div>
        <h1></h1>
        <h1 className='TaskHead'>The Capsule</h1> 
        <h1></h1>
        
        
        <div className="Logout">
                <a href='/'>
                <i class="fa-solid fa-right-from-bracket" ></i>
                </a>
        </div>
    </div>
}
export default Navbar