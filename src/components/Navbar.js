import React from 'react'
import "./Navbar.css"

import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const gotoProfile=()=>{
        navigate('/profile');
    }
    return (
    
        <div className="navbar">
          <div className="logo">
                <h1>Logo</h1>
          </div>
          <div className="profile-pic">
               <p>pic</p><p>Admin</p>
               
           </div>
        </div>
    )
}

export default Navbar
