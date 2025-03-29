// import React, { useState } from "react";
import "./Header.css";
// import { BsSearch } from "react-icons/bs";
// import { BsDiscord } from "react-icons/bs";
// import { BsInstagram } from "react-icons/bs";
// import { BsGithub } from "react-icons/bs";
// import HeaderLinks from "./HeaderLinks";
import { FaBars } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
import LogoPhoto from '../images/GT11.png'

function Header({openSide}) {


  return (
    <header className="Header">
      <div className="Header__Logo">
        <img className="Header__Logo__Photo" src={LogoPhoto} alt="Logo" />
      </div>


      <FaBars  className="Header__Bars__Icons" onClick={openSide}/>
  
    </header>
  );
}

export default Header;
