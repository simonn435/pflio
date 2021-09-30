import React, { useEffect, useRef } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiMaterialUi, SiMongodb, SiRedux } from "react-icons/si";
import cv from "../assets/CV.pdf";
// import { FaCogs, FaDiceD6 } from "react-icons/fa";
import descarga from "../assets/descarga.png";
import Footer from "../components/Footer";

const Aboutpage = () => {
  const ref = useRef(null);

  useEffect(() => {
    const myRef = ref.current;

    const handleMove = (e) => {
      const x = e.pageX - myRef.offsetLeft + "px";
      const y = e.pageY - myRef.offsetTop + "px";

      myRef.style.setProperty("--x", x);
      myRef.style.setProperty("--y", y);
    };

    myRef.addEventListener("mousemove", handleMove);

    return () => {
      myRef.removeEventListener("mousemove", handleMove);
    };
  }, []);

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
              <span className="text__red">Who</span> am I?
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
            <a ref={ref} href={cv} download className="cv__button">
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
                  SPA Applications
                </h4>
                <p className="services__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  consequuntur dignissimos cumque similique provident ducimus
                  architecto ipsam, beatae enim nostrum voluptatum quibusdam,
                  praesentium optio iure iusto, tempora velit neque hic?
                </p>
              </div>
              <div className="services__card">
                <img className="services__img" src={descarga} alt="" />
                <h4 className="section__subtitle services__subtitle">
                  Maintenance and Support
                </h4>
                <p className="services__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  consequuntur dignissimos cumque similique provident ducimus
                  architecto ipsam, beatae enim nostrum voluptatum quibusdam,
                  praesentium optio iure iusto, tempora velit neque hic?
                </p>
              </div>
              <div className="services__card">
                <img className="services__img" src={descarga} alt="" />
                <h4 className="section__subtitle services__subtitle">
                  Responsive Design & Cross-Browser
                </h4>
                <p className="services__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  consequuntur dignissimos cumque similique provident ducimus
                  architecto ipsam, beatae enim nostrum voluptatum quibusdam,
                  praesentium optio iure iusto, tempora velit neque hic?
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
