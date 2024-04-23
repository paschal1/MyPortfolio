import aboutme from "../../img/aboutme1.png"


export default function AboutMe() {
  return (
    <div>
      <section id="AboutMe" className="about--section">
            <div className="about--section--img">
         <img src={aboutme} alt="aboute me image" className="image" />

</div>
              <div className="hero--section--content--box--about--section--box">
                  <div className="hero--section--content">
                      <p className="section--title">About</p>
                      <h1 className="skills--section--heading">About Me</h1>
                      <p className="hero--section--description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet in magni? Perspiciatis at consequatur, dolores cumque ipsa qui saepe? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet in magni? Perspiciatis at consequatur, dolores cumque ipsa qui saepe?
                      </p>

                      <p className="hero--section--description">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet in magni? Perspiciatis at consequatur, dolores cumque ipsa qui saepe?
                      </p>
</div>
              </div>
          </section>
    </div>
  )
}

