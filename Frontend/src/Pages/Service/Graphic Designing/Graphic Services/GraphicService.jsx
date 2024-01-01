import React from "react";
import { useTheme } from "../../../../Theme/ThemeContext";
import { Link } from "react-router-dom";
import "./GraphicService.css";
import web_services from "../../../../../public/images/web_service.jpg";
import graphic_service_header from "../../../../../public/images/graphic_service_header.jpg";
import graphic_designing from "../../../../../public/images/graphic_designing.jpg";
import reactLogo from "../../../../../public/images/reactLogo.png";
import wordpressLogo from "../../../../../public/images/wordpressLogo.png";
import html_css_js from "../../../../../public/images/html_css_js.png";
import custom from "../../../../../public/images/custom.png";

import client from "../../../../../public/web_service_image/client.png";
import img_360 from "../../../../../public/web_service_image/img_360.png";
import market from "../../../../../public/web_service_image/market.png";
import team from "../../../../../public/web_service_image/team.png";
import expert from "../../../../../public/web_service_image/expert.png";

const GraphicService = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div style={{ backgroundColor: isDarkTheme ? "#242435" : "white" }}>
      {/* ---------------- GRAPHIC SERVICES ---------------- */}
      <section
        className="web_services"
        style={{ backgroundImage: `url(${graphic_service_header})` }}
      >
        <div className="web_services_cont text-center">
          <h4 className="software_heading">GRAPHIC DESINGING SERVICES</h4>
          <p className="web_services_text text-center">
            We help our partners accelerate disruption both within their
            organizations and industries. They strategize new ideas and obtain
            real business value by getting the most out of our production-ready
            custom software development services. Talk to our experts today!
          </p>

          <Link to="/Contact" className="btn web_services_btn">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* ----------- WEB SERVICES -----------   */}
      <section className="container services_showcase how_we_work my-1">
        <h1 className="services_showcase_title">
          OUR WEB DEVELOPMENT SERVICES
        </h1>
        <p
          className="services_showcase_text mb-3"
          style={{ color: isDarkTheme ? "white" : "black" }}
        >
          From IT strategy consulting and comprehensive technology roadmaps to
          the end-to-end development of scalable solutions, Intellectsoft
          delivers a full-cycle software development services that adapt
          seamlessly to your project requirements and business needs.
        </p>

        <div className="software_data mt-4 py-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="data1 web_names">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <img src={reactLogo} alt="" width="50px" />
                  <span className="mx-2">MERN</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  Our process begins with the creation of a software prototype,
                  which ensures a flawless final product.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="data1 web_names">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <img src={wordpressLogo} alt="" width="50px" />
                  <span className="mx-2">Wordpress</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  The inclusion of cyber security measures is an integral part
                  of the software's protection of all data from possible
                  malicious attacks.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="data1 web_names">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <img src={html_css_js} alt="" width="50px" />
                  <span className="mx-2">HTML CSS JS</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  We constantly test both the software and its code to reduce
                  risks and quickly identify potential bugs.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="data1 web_names">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <img src={custom} alt="" width="50px" />
                  <span className="mx-2">Custom</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  Our software websites prioritize optimal results and
                  comprehensive features to ensure a complete user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- WEB SERVICES -----------   */}
      <section className="container why_choose_it text-center my-4">
        <h2 className="why_choose_it_title">
          WHY CHOOSE{" "}
          <span style={{ color: "#f11900", fontWeight: "600" }}>
            IT EXPERTS
          </span>
        </h2>
        <p className="why_choose_it_text">
          Using deep domain expertise of our software developers, we create
          impactful digital solutions that drive meaningful change with a
          strategic vision.
        </p>

        <div className="why_choose_it_boxes my-5">
          <div className="why_choose_it_box">
            <img src={img_360} alt="" width="70px" />
            <p>360 Approach</p>
          </div>
          <div className="why_choose_it_box">
            <img src={client} alt="" width="70px" />
            <p>Client Centricty</p>
          </div>
          <div className="why_choose_it_box">
            <img src={expert} alt="" width="70px" />
            <p>Domain Expertise</p>
          </div>
          <div className="why_choose_it_box">
            <img src={market} alt="" width="70px" />
            <p>Time to Market</p>
          </div>
          <div className="why_choose_it_box">
            <img src={team} alt="" width="70px" />
            <p>A Class Team</p>
          </div>
        </div>
      </section>

      {/* ----------- WEB SERVICES -----------   */}
      <div className="container  px-sm-10 mt-3 mb-5 py-1">
        <div className="row specialbox">
          <div className="col-lg-6 col-md-6 col-sm-12 spequot">
            <h4
              className="specialist"
              style={{
                color: isDarkTheme ? "white" : "black",
                fontWeight: "700",
              }}
            >
              <span style={{ color: "#F11900", fontWeight: "600" }}>
                How We
              </span>{" "}
              Work
            </h4>
            <p
              className="specialist_pera"
              style={{
                color: isDarkTheme ? "white" : "black",
                fontWeight: 400,
                fontSize: "1.2rem",
              }}
            >
              Our approach involves creating technical standards that our
              developers must adhere to and ensure quality work.
            </p>
            {/* <button className="quotbutton">Get Quote</button> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10">
            <div
              className="home_img_buttom"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <img src="images/spimgae.png" className="thumbnailHover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicService;
