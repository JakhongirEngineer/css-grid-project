import React from "react";


const Footer = () => {
    return(
      <footer className="footer">
      
          <ul className="nav">
            <li className="nav__item"><a href="#" className="nav__link">find your dream home</a></li>
            <li className="nav__item"><a href="#" className="nav__link">request for proposal</a></li>
            <li className="nav__item"><a href="#" className="nav__link">download home planner</a></li>
            <li className="nav__item"><a href="#" className="nav__link">contact us</a></li>
            <li className="nav__item"><a href="#" className="nav__link">submit work property</a></li>
            <li className="nav__item"><a href="#" className="nav__link">come work with us</a></li>
          </ul>
        <p className="copyright">
          this project was initially created by a udemy instructor Jonas Schmendtmann using vanilla css and html.
          Focus of this project is mainly on css grid. I used React to create my own vertion of this project.
        </p>
      </footer>
    )
}

export default Footer;