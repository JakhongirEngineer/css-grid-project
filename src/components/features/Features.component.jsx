import React from "react";
import Feature from "./feature.component";

// icon names, paragraphs and headings
// feature1 props:
const icon1 = "icon-global";
const heading1 = "World's best luxury homes"
const paragraph1 = "investment in  mantions like these definitely deserves, not only they are so beautiful that you feel as a prince living in them, but because they are worth for every single penny that you pay."
// feature2 props:
const icon2 = "icon-trophy";
const heading2 = "only the best properties"
const paragraph2 = "all rooms in every single home are equipped with modern tools equipments such as air conditioning. A kitchen is also full of equipments that you wife would love."
// feature3 props:
const icon3 = "icon-map-pin";
const heading3 = "all homes are in top locations"
const paragraph3 = "If you love nature, and want to see the sun first whenever you wake up, these houses are just for you."

// feature4 props:
const icon4 = "icon-key";
const heading4 = "a new home in a week"
const paragraph4 = "Our service has been proven to be fast. We respect your time, and we don't want you to wait to begin living in your  new beautiful home too much";

// feature5 props:
const icon5 = "icon-presentation";
const heading5 = "top 1% realtors"
const paragraph5 = "Our realtors are experts in their field, so you should not worry about anything. We will able to handle any kind of issues immediately.";

// feature6 props:
const icon6 = "icon-lock";
const heading6 = "secure payments on nexter"
const paragraph6 = "paying securely is guaranteed. You can pay almost in any sort of payment methods.";



const Features = () => {
    return(
      <section className="features">
        <Feature icon={icon1} heading={heading1} paragraph={paragraph1}/>
        <Feature icon={icon2} heading={heading2} paragraph={paragraph2}/>
        <Feature icon={icon3} heading={heading3} paragraph={paragraph3}/>
        <Feature icon={icon4} heading={heading4} paragraph={paragraph4}/>
        <Feature icon={icon5} heading={heading5} paragraph={paragraph5}/>
        <Feature icon={icon6} heading={heading6} paragraph={paragraph6}/>
      </section>

    )
}

export default Features;