import React, { useEffect, useRef } from "react";
import img from "../assets/portfolio.jpg";
import { mouseHover } from "../helpers/buttonHover";

const PortfolioPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    mouseHover(ref);
  }, []);

  return (
    <section className="portfolio">
      {/* Header */}
      <div className="portfolio__header">
        <h3 className="section__title portfolio__title">
          My <span className="text__red">Portfolio</span>
        </h3>
        <h5>
          Some of my <span className="text__red">works</span>
        </h5>
      </div>

      {/* Works */}
      <section className="portfolio__works">
        <div className="portfolio__work-container">
          <div className="work__img">
            <img src={img} alt="" />
          </div>
          <div className="work__content">
            <h3 className="section__subtitle text__red">Work Work</h3>
            <p className="services__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              temporibus corporis error assumenda in reiciendis, optio amet
              asperiores eaque dolorum iste ut nemo, earum autem voluptate
              tenetur at laboriosam culpa!
            </p>
            <a
              href="https://dazzling-northcutt-c6821b.netlify.app/"
              className="btn__outline-red"
              ref={ref}
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="portfolio__work-container">
          <div className="work__img">
            <img src={img} alt="" />
          </div>
          <div className="work__content">
            <h3 className="section__subtitle text__red">Work Work</h3>
            <p className="services__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              temporibus corporis error assumenda in reiciendis, optio amet
              asperiores eaque dolorum iste ut nemo, earum autem voluptate
              tenetur at laboriosam culpa!
            </p>
            <a
              href="https://dazzling-northcutt-c6821b.netlify.app/"
              className="btn__outline-red"
              ref={ref}
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
        <div className="portfolio__work-container">
          <div className="work__img">
            <img src={img} alt="" />
          </div>
          <div className="work__content">
            <h3 className="section__subtitle text__red">Work Work</h3>
            <p className="services__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              temporibus corporis error assumenda in reiciendis, optio amet
              asperiores eaque dolorum iste ut nemo, earum autem voluptate
              tenetur at laboriosam culpa!
            </p>
            <a
              href="https://dazzling-northcutt-c6821b.netlify.app/"
              className="btn__outline-red"
              ref={ref}
            >
              <span>View Project</span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortfolioPage;
