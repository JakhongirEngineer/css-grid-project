import React from "react";
import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";


const Realtors = () => {
    return(
      <div className="realtors">
        <h3 className="heading-3 realtors__heading">top 3 realtors</h3>
        <div className="realtors__list">
          <img src={realtor1} alt="realtor's photo" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">erik nilson</h4>
            <p className="realtors__sold">233  houses sold</p>
          </div>

          <img src={realtor2} alt="realtor's photo" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">321 houses sold</p>
          </div>

          <img src={realtor3} alt="realtor's photo" className="realtors__img"/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Tony Laby</h4>
            <p className="realtors__sold">435 houses sold</p>
          </div>
        </div>

      </div>


    )
}

export default Realtors;