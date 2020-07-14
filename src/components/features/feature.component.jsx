import React from "react";
import sprite from "../../img/sprite.svg";

const Feature = ({icon, heading, paragraph}) =>{
    return(
        <div className="feature">
            <svg className="feature__icon">
                <use xlinkHref={sprite + `#${icon}` }></use>
            </svg>
            <h4 className="heading-4 heading-4--dark">{heading}</h4>
            <p className="feature__text">{paragraph}</p>
        </div>
    )
}

export default Feature;