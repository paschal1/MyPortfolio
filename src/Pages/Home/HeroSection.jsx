import React from 'react'
import img from '../../img/hero_imgs.png';

export default function HeroSection() {
  return (
   <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">



        <p className="section--title">Hey, I'm Paschal</p>

        <h1 className="hero--section--title">
          <span className="hero--section--title--color">Full Stack</span>{" "}
      <br />
          Developer</h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem natus asperiores!
          </p>

        </div>
        <button className="btn btn-primary">Get in Touch</button>
        <button className="btn btn-outline-primary">My Resume</button>
      </div>

      <div className="hero--section--img">
        <img src={img} alt=" hero Section" />
      </div>
   </section>
  )
}


