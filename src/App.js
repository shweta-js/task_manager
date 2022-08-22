import React from 'react'
// import { Routes,Route, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
const App=()=>{
    return(
      <div>
      <Navbar/>
      <Sidebar/>
           <Routes>
           <Route path="login" element={<Login />}/>
           <Route path="/*" element={<Home />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="/settings" element={<Settings/>}/>
           </Routes>
      </div>
    
    )
}
export default App