import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";

const StoryPictures = () => {
    return(
      <div className="story__pictures">
        <img src={story1} alt="couple with a hause" className="story__img--1"/>
        <img src={story2} alt="a hause" className="story__img--2"/>
      </div>


    )
}

export default StoryPictures;