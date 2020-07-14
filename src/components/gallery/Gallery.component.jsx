import React from "react";
import images from "./galeryImages";



const Gallery = () => {
    return(
      <section className="gallery">

          <figure className="gallery__item gallery__item--1">
             <img src={images.gal1} alt="gal-image" className="gallery__img gallery__img--1"/>
          </figure>
          <figure className="gallery__item gallery__item--2">
             <img src={images.gal2} alt="gal-image" className="gallery__img gallery__img--2"/>
          </figure>
          <figure className="gallery__item gallery__item--3">
             <img src={images.gal3} alt="gal-image" className="gallery__img gallery__img--3"/>
          </figure>
          <figure className="gallery__item gallery__item--4">
             <img src={images.gal4} alt="gal-image" className="gallery__img gallery__img--4"/>
          </figure>
          <figure className="gallery__item gallery__item--5">
              <img src={images.gal5} alt="gal-image" className="gallery__img gallery__img--5"/>
          </figure>
          <figure className="gallery__item gallery__item--6">
             <img src={images.gal6} alt="gal-image" className="gallery__img gallery__img--6"/>
          </figure>
          <figure className="gallery__item gallery__item--7">
             <img src={images.gal7} alt="gal-image" className="gallery__img gallery__img--7"/>
          </figure>
          <figure className="gallery__item gallery__item--8">
             <img src={images.gal8} alt="gal-image" className="gallery__img gallery__img--8"/>
          </figure>
          <figure className="gallery__item gallery__item--9">
             <img src={images.gal9} alt="gal-image" className="gallery__img gallery__img--9"/>
          </figure>
          <figure className="gallery__item gallery__item--10">
             <img src={images.gal10} alt="gal-image" className="gallery__img gallery__img--10"/>
          </figure>
          <figure className="gallery__item gallery__item--11">
             <img src={images.gal11} alt="gal-image" className="gallery__img gallery__img--11"/>
          </figure>
          <figure className="gallery__item gallery__item--12">
             <img src={images.gal12} alt="gal-image" className="gallery__img gallery__img--12"/>
          </figure>
          <figure className="gallery__item gallery__item--13">
              <img src={images.gal13} alt="gal-image" className="gallery__img gallery__img--13"/>
          </figure>
          <figure className="gallery__item gallery__item--14">
              <img src={images.gal14} alt="gal-image" className="gallery__img gallery__img--14"/>
          </figure>
      </section>

    )
}

export default Gallery;