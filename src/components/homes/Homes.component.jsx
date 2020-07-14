import React from "react";
import House from "./House.component";
import image1 from "../../img/house-1.jpeg";
import image2 from "../../img/house-2.jpeg";
import image3 from "../../img/house-3.jpeg";
import image4 from "../../img/house-4.jpeg";
import image5 from "../../img/house-5.jpeg";
import image6 from "../../img/house-6.jpeg";

class Homes extends React.Component {
  constructor(props){
    super(props);
    this.state={
      details:[
        {
          id:1,
          image:image1,
          houseName:"King's mantion",
          country:"USA",
          area:"345",
          price:"1200000",
          numberOfRooms:"5"
        },
        {
          id:2,
          image:image2,
          houseName:"Modern Glass villa",
          country:"Canada",
          area:"450",
          price:"2200000",
          numberOfRooms:"6"
        },
        {
          id:3,
          image:image3,
          houseName:"Cozy country house",
          country:"UK",
          area:"250",
          price:"850000",
          numberOfRooms:"4"
        },
        {
          id:4,
          image:image4,
          houseName:"casstle",
          country:"Germay",
          area:"444",
          price:"333333333",
          numberOfRooms:"3"
        },
        {
          id:5,
          image:image5,
          houseName:"Queen's house",
          country:"Belgium",
          area:"555",
          price:"555555555",
          numberOfRooms:"5"
        },
        {
          id:6,
          image:image6,
          houseName:"Oligarh's house",
          country:"Mexico",
          area:"666",
          price:"6666666666",
          numberOfRooms:"6"
        }
      ]
    }
  }
  render(){

    return(
      <section className="homes">
        {
          this.state.details.map( (detail)=>{
            return <House {...detail}/>
          } )
        }
      </section>
    )
  }
   
}

export default Homes;