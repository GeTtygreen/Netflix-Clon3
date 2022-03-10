import React,{useEffect, useState} from 'react';
import './Nav.css';
import logo from './netflix.png';


function Nav() {
  const [show, handleShow]= useState();
  useEffect(() =>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false);
    });
      return ()=>{
        window.removeEventListener("scroll");
      }
   },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
        className="nav__logo"
        src={logo}
        alt="Netflix Logo"/>

        <img 
        className="nav__avatar"
        src="https://64.media.tumblr.com/e43732bbd95c530895d0d4fc17251b4b/tumblr_pcg0h1svnr1xqvcdxo1_250.png"
        alt="Gettix Avatar"/>
    </div>
  )
}

export default Nav;