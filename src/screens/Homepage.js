import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Homepage = () => {
  return (
    // Home Page
    <section className="home">
      <header className="header">
        <div className="header__links ">
          <div>
            <FaLinkedin />
          </div>

          <div>
            <FaInstagram />
          </div>
        </div>

        <div>
          <h1 className="header__title asd">
            <span className="text__red asd">Simon</span> Villaverde
          </h1>
          <h2 className="section__title asd header__subtitle">
            Front-End developer
          </h2>
        </div>

        <div className="header__contact">
          <div>
            <a href="mailto:simonvillaverde9@gmail.com">
              <SiGmail />
            </a>
          </div>
          <div>
            <a href="tel:+542241585923">
              <IoCall />
            </a>
          </div>
        </div>

        <div className="header__icons-responsive">
          <div>
            <FaLinkedin />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <SiGmail />
          </div>
          <div>
            <IoCall />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Homepage;
