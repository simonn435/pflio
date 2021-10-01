import React from "react";
import netflix from "../assets/netflix.png";
import githubTest from "../assets/githubtest.png";
import pokeapi from "../assets/pokeapi.png";
import { handleMove } from "../helpers/buttonHover";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  return (
    <>
      <section className="portfolio">
        {/* Header */}
        <div className="portfolio__header">
          <h3 className="section__title portfolio__title">
            My <span className="text__red">Portfolio</span>
          </h3>
          <h5>
            Some of my <span className="text__red">projects</span>
          </h5>
        </div>

        {/* Works */}
        <section className="portfolio__works">
          <div className="portfolio__work-container">
            <div className="work__img">
              <img src={netflix} alt="" />
            </div>
            <div className="work__content">
              <h3 className="section__subtitle text__red">Netlifx Copy</h3>
              <p className="services__text">
                "Copy" of netflix made with React, Redux, Material UI and React
                Router Dom.
              </p>
              <a
                href="https://amazing-haibt-ad997d.netlify.app/"
                className="btn__outline-red"
                onMouseMove={handleMove}
              >
                <span>View Project</span>
              </a>
            </div>
          </div>
          <div className="portfolio__work-container">
            <div className="work__img">
              <img src={githubTest} alt="" />
            </div>
            <div className="work__content">
              <h3 className="section__subtitle text__red">Github API</h3>
              <p className="services__text">
                This app is a test for an interview that I made fetching data
                from the github api. I used React, Redux, Material UI and React
                Router Dom.
              </p>
              <a
                href="https://hardcore-saha-7781d9.netlify.app/"
                onMouseMove={handleMove}
                className="btn__outline-red"
              >
                <span>View Project</span>
              </a>
            </div>
          </div>
          <div className="portfolio__work-container">
            <div className="work__img">
              <img src={pokeapi} alt="Netflix" />
            </div>
            <div className="work__content">
              <h3 className="section__subtitle text__red">PokeApi</h3>
              <p className="services__text">
                This is one of my first apps working with API's. It's made with
                React, React Router Dom and React-Bootstrap.
              </p>
              <a
                href="https://serene-northcutt-99ebe3.netlify.app/"
                onMouseMove={handleMove}
                className="btn__outline-red"
              >
                <span>View Project</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
};

export default PortfolioPage;
