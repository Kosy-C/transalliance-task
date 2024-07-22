import React from "react";
import companyLogo from "../../assets/logo.svg";
import "./NavBar.css";
import Arrow from "../../assets/arrow.svg";

const NavBar = () => {
  const submitted = () => console.log(submitted);
  return (
    <div className="navbar">
      <div className="navImage">
        <img src={companyLogo} alt="companylogo" />
      </div>

      <div className="navRoute">
        <div>
            <span> Home </span>
            <span> About </span>
            <span> Solutions </span>
            <span> News & Insights </span>
            <span> ContactUs </span>
        </div>
        
        <div className="button-container">
             <button type="button" 
                onClick={submitted}                   className="navButton">
                <span> Get Started </span> 
                <span> <img className="arrow-img" src={Arrow} alt="" /> </span>
            </button>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
