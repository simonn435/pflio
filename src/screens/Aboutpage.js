import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiMaterialUi, SiRedux } from "react-icons/si";
import cv from "../assets/CV.pdf";
import descarga from "../assets/descarga.png";
import Footer from "../components/Footer";
import { handleMove } from "../helpers/buttonHover";

const Aboutpage = () => {
  return (
    <>
      <section className="about">
        <div className="about__inner">
          {/* Header */}

          <div className="about__header">
            <h3 className="section__title">
              <span className="text__red">About</span> Me
            </h3>
            <h5>
              <span className="text__red ">Who</span> am I?
            </h5>
          </div>

          {/* Content */}

          <div className="about__content">
            <h3 className="section__title">
              I'm a dedicated <span className="text__red">web developer</span>{" "}
              from Argentina
            </h3>
            <p className="section__text">
              With 2 years of experience as a Web developer, I have adquired the
              skills and knowledge necessary to make your project a success. I
              enjoy every step while working.
            </p>
            <a
              onMouseMove={handleMove}
              href={cv}
              download
              className="btn__outline-red"
            >
              <span>Download CV</span>
            </a>
          </div>

          {/* Services */}

          <div className="about__services">
            <h3 className="section__title">
              My <span className="text__red">Services</span>
            </h3>

            <div className="services__cards-container">
              <div className="services__card">
                <img className="services__img" src={descarga} alt="" />
                <h4 className="section__subtitle services__subtitle">
                  Frontend
                </h4>
                <p className="services__text">
                  I use the latest technologies like React to make fast,
                  responsive and cross-browser web applications.
                </p>
              </div>
              <div className="services__card">
                <img className="services__img" src={descarga} alt="" />
                <h4 className="section__subtitle services__subtitle">
                  Backend
                </h4>
                <p className="services__text">
                  I can make restful api's with the MERN stack, although I'm not
                  too good I'm studying every day to become a fullstack
                  developer.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}

          <section className="about__skills">
            <h3 className="section__title">
              My <span className="text__red">Skills</span>
            </h3>

            <div className="skills__container">
              <div className="skill" data-text="HTML">
                <FaHtml5 />
              </div>
              <div className="skill" data-text="CSS">
                <FaCss3Alt />
              </div>
              <div className="skill" data-text="Javascript">
                <FaJs />
              </div>
              <div className="skill" data-text="React">
                <FaReact />
              </div>
              <div className="skill" data-text="Redux">
                <SiRedux />
              </div>
              <div className="skill" data-text="Material UI">
                <SiMaterialUi />
              </div>
              <div className="skill" data-text="Bootstrap">
                <FaBootstrap />
              </div>
              <div className="skill" data-text="Sass">
                <FaSass />
              </div>
              <div className="skill" data-text="Github">
                <FaGithub />
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutpage;
