import React from "react";
import logo from "../img/logo.png";
import logo1 from "../img/logo-bbc.png";
import logo2 from "../img/logo-bi.png";
import logo3 from "../img/logo-forbes.png";
import logo4 from "../img/logo-techcrunch.png";


const Header = () => {
    return(
      <header className="header">
        <img src={logo} alt="" className="header__logo"/>
        <h3 className="heading-3">your own home</h3>
        <h1 className="heading-1">the ultumate personal freedom</h1>
        <button className="btn header__btn">view our properties</button>
        <div className="header__seenon-text">
          <p>as seen on</p>
        </div>
        <div className="header__seenon-logos">
          <img src={logo1} alt="logo 1" className="header__seenon-logo"/>
          <img src={logo2} alt="logo 2" className="header__seenon-logo"/>
          <img src={logo3} alt="logo 3" className="header__seenon-logo"/>
          <img src={logo4} alt="logo 4" className="header__seenon-logo"/>
        </div>
      </header>

    )
}

export default Header;