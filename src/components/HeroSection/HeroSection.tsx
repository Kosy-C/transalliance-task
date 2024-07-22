// import React from "react";
import lapTop from "../../assets/img.svg";
import sign247 from "../../assets/24:7.svg";
import discoverMore from "../../assets/discoverMore.svg";
import Sign888 from "../../assets/888.svg";
import CIMB from "../../assets/CIMB.svg";
import DanishRedCross from "../../assets/DanishRedCross.svg";
import MoneyGram from "../../assets/MoneyGram.svg";
import Nuvei from "../../assets/Nuvei.svg";
import RakBank from "../../assets/RakBank.svg";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div>
            <div className="hero-header">
                <div className="header-container">
                    <span className="header6-text">Simplified cross-border payment</span>
                    <p className="header1">
                        We are the <br /> payments people
                    </p>
                    <h6 className="h6-text">
                        Transalliance Group's cross-border payments solutions connect <br />
                        organisations and communities globally to the network they need
                        <br /> to thrive. Together, we make money move.
                    </h6>
                </div>

                <div className="hero-img-1">
                    <img src={sign247} alt="" />
                </div>
                <div className="hero-img">
                    <span>
                     <img className="lapTop-img" src={lapTop} alt="" />
                    </span>
                </div>
            </div>

            <div className="hero-discover">
                <img src={discoverMore} alt="" />
            </div>

                <div className="border-img">
                    <p className="h5-text">
                        Send and Receive Money from all <br /> over with ease.
                    </p>
                    <div className="img-logos">
                        <img src={DanishRedCross} alt="" />
                        <img src={Sign888} alt="" />
                        <img src={CIMB} alt="" />
                        <img src={Nuvei} alt="" />
                        <img src={MoneyGram} alt="" />
                        <img src={RakBank} alt="" />
                    </div>
                </div>
        </div>
    );
};

export default HeroSection;
