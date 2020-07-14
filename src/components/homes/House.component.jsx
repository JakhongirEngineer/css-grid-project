import React from "react";
import sprite from "../../img/sprite.svg";

const House = ({image, houseName, country, area, price, numberOfRooms}) => {
    return(
        <div className="house">
            <img src={image} alt={houseName} className="house__img"/>
            <svg className="house__like">
                <use xlinkHref={sprite+"#icon-heart-full"}></use>
            </svg>
            <h5 className="house__name">{houseName}</h5>
            <div className="house__location">
                <svg>
                    <use xlinkHref={sprite+"#icon-map-pin"}></use>
                </svg>
                <p>{country}</p>
            </div>
            <div className="house__rooms">
                <svg>
                    <use xlinkHref={sprite+"#icon-profile-male"}></use>
                </svg>
                <p>{numberOfRooms} rooms</p>
            </div>
            <div className="house__area">
                <svg>
                    <use xlinkHref={sprite+"#icon-expand"}></use>
                </svg>
                <p>{area} m <sup>2</sup></p>
            </div>
            <div className="house__price">
                <svg>
                    <use xlinkHref={sprite+"#icon-key"}></use>
                </svg>
                <p>${price}</p>
            </div>
            
            <button className="btn house__btn">contact realtors</button>
        </div>
    )
}

export default House;