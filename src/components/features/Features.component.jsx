import React from "react";
import Feature from "./feature.component";

// icon names, paragraphs and headings
// this dummy data is used only for demo purposes
 const features = [
  {
    id:1,
    icon:"icon-global",
    heading:"World's best luxury homes",
    paragraph : "investment in  mantions like these definitely deserves, not only they are so beautiful that you feel as a prince living in them, but because they are worth for every single penny that you pay."

  },
  {
    id:2,
     icon: "icon-trophy",
     heading : "only the best properties",
     paragraph : "all rooms in every single home are equipped with modern tools equipments such as air conditioning. A kitchen is also full of equipments that you wife would love."

  },
  {
    id:3,
    icon: "icon-map-pin",
    heading:"all homes are in top locations",
    paragraph: "If you love nature, and want to see the sun first whenever you wake up, these houses are just for you."
   
  },
  {
    id:4,
    icon: "icon-key",
    heading:"a new home in a week",
    paragraph:"Our service has been proven to be fast. We respect your time, and we don't want you to wait to begin living in your  new beautiful home too much"

  },{
    id:5,
    icon: "icon-presentation",
    heading: "top 1% realtors",
    paragraph: "Our realtors are experts in their field, so you should not worry about anything. We will able to handle any kind of issues immediately."

  },
  {
    id:6,
    icon: "icon-lock",
    heading: "secure payments on nexter",
    paragraph: "paying securely is guaranteed. You can pay almost in any sort of payment methods."

  }
]


class Features extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      features:features
    }
  }
  render(){

    return(
      <section className="features">
        {
          this.state.features.map( (feature) => {
            return <Feature key={feature.id} icon={feature.icon} heading={feature.heading} paragraph={feature.paragraph}/>
          } )
        }
        
      </section>
    )
  }
    
}

export default Features;