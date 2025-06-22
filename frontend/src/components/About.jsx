import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Our story begins with a simple love for food—the comforting warmth
              of a home-cooked Indian meal and the refined artistry of a classic
              Continental dish. We simply asked ourselves, 'Why choose?'
              <br/><br/>
              Here, we bring both worlds together. Our kitchen is a playground
              where generations-old Indian recipes are introduced to European
              culinary traditions. We are committed to using the freshest local
              produce, allowing the purity of Continental ingredients and the
              complexity of Indian spices to shine in perfect harmony.
            </p>
            <Link to={"menu"} spy={true} smooth={true} duration={500}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
