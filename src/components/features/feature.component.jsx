import React from "react";
import sprite from "../../img/sprite.svg";

const Feature = ({icon, heading, paragraph}) =>{
    return(
        <div className="featur">
            <svg className="feature__icon">
                <use xlinkHref={sprite + `#${icon}` }></use>
            </svg>
            <h4 className="header-4">{heading}</h4>
            <p className="feature__text">{paragraph}</p>
        </div>
    )
}

export default Feature;