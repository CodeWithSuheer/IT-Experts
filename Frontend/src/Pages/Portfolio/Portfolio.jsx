import React from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../Theme/ThemeContext";
import portfolio from "../../../public/images/portfolio.png";
import link from "../../../public/images/link.png";
import PortfolioData from "./PortfolioData";
import "./Portfolio.css";
import Scroll from "../../Component/ScrolltoTap/Scroll";
const Portfolio = () => {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <div
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "#fff",
          color: isDarkTheme ? "white" : "black",
          paddingBottom: 100,
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>It Experts | Portfolio </title>
        </Helmet>

        {/* ------------ SECTION NO 1 ------------ */}
        <section className="portfolio">
          <div className="portfolio_cont">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <h4 className="portfolio_text">IT EXPERTS Portfolio</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------ SECTION NO 2 ------------ */}
        <section className="portfolio_details" style={{ minHeight: "60vh" }}>
          <div className="portfolio_details_img">
            <img src={portfolio} alt="" />
          </div>
          <div className="portfolio_details_text">
            <h2 className="portfolio_heading">
              IT
              <span style={{ color: "#f11900", fontWeight: "600" }}>
                {" "}
                Expert{" "}
              </span>
              Portfolio
            </h2>

            <p className="portfolio_info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
              cumque cupiditate! Inventore excepturi tempora repudiandae iste
              facilis laboriosam voluptatum aut expedita quaerat quis aliquam,
              dolor commodi tempore numquam repellat possimus magni nemo quas
              incidunt autem, dolorum quasi amet. Veniam quis iure odio
              voluptates nostrum ex at alias, ut blanditiis facere quos quaerat
              quidem hic consectetur tenetur sit suscipit quas laudantium labore
              fugit id reiciendis minima magni. Labore repellendus animi enim
              facere eaque consectetur nam eius. Reiciendis aperiam optio rerum
              vel quaerat nostrum deserunt, dicta error minus dolorem iure
              tempora, architecto placeat numquam eum adipisci nisi iste, quae
              asperiores similique ducimus. Culpa, odio. Voluptatem sequi
              suscipit dolorum atque. Numquam, v temporibus.
            </p>
          </div>
        </section>

        {/* ------------ SECTION NO 3 ------------ */}
        <section className="container portfolio_projects text-center my-5">
          <h2 className="portfolio_projects_title">
            Our{" "}
            <span style={{ color: "#f11900", fontWeight: "600" }}>
              Impressive
            </span>{" "}
            Portfolio
          </h2>
          <div className="my-5">
            <div className="projects row mx-0">
              {PortfolioData.map((project) => (
                <div
                  key={project.id}
                  className="my-2 col-sm-6 col-md-4 col-lg-4"
                >
                  <div class="card project_card">
                    <div className="window">
                      <img src={project.image} class="card-img-top" alt="..." />
                    </div>
                    <div
                      class="card-body"
                      style={{ backgroundColor: "rgb(250, 248, 248)" }}
                    >
                      <h5 class="card-title">{project.name}</h5>
                      <p class="card-text">{project.desc}</p>

                      <a
                        href="#"
                        class="btn btn-danger"
                        style={{
                          backgroundColor: "#f11900",
                          border: "1px solid danger",
                          padding: "12px",
                          borderRadius: 10,
                        }}
                      >
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Scroll />
      </div>
    </>
  );
};

export default Portfolio;
