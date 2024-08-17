import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    
   
    <header>
    <div class="logo">
    <div class="logo-icon"></div>
    <img src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png" width="50px" alt="BookAI Logo" />
    <Link to="/">BookAI</Link> </div>
  <nav>
    <a href="#features">Features</a>
    <a href="#how-it-works">How It Works</a>
    <a href="#roadmap">Roadmap</a>
    <a href="/api">API</a>
    <a href="/api#pricing"> <Link to="/pricing">Price</Link></a>
    <a href="/api#pricing">Models</a>
    <a href="javascript:void(0);" id="auth-button">Login / Sign Up</a>
    <a href="javascript:void(0);" id="profile-button" style={{display: "none"}}>Profile</a>
    <a href="javascript:void(0);" id="logout-button" style={{display: "none"}}>Log Out</a>
</nav>
</header>
  );
};

export default Header;
