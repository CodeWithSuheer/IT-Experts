import React from "react";
import { useTheme } from "../../../../Theme/ThemeContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import web_services from "../../../../../public/images/web_service.jpg";
import reactLogo from "../../../../../public/images/reactLogo.png";
import wordpressLogo from "../../../../../public/images/wordpressLogo.png";
import html_css_js from "../../../../../public/images/html_css_js.png";
import custom from "../../../../../public/images/custom.png";

import client from "../../../../../public/web_service_image/client.png";
import img_360 from "../../../../../public/web_service_image/img_360.png";
import market from "../../../../../public/web_service_image/market.png";
import team from "../../../../../public/web_service_image/team.png";
import expert from "../../../../../public/web_service_image/expert.png";
import Scroll from "../../../../Component/ScrolltoTap/Scroll";
import "./Services.css";

const WebServices = () => {
  const { isDarkTheme } = useTheme();
  const softwareData = [
    {
      id: 1,
      logo: reactLogo,
      name: "MERN",
      description:
        "Our process begins with the creation of a software prototype, which ensures a flawless final product.",
    },
    {
      id: 2,
      logo: wordpressLogo,
      name: "Wordpress",
      description:
        "The inclusion of cybersecurity measures is an integral part of the software's protection of all data from possible malicious attacks.",
    },
    {
      id: 3,
      logo: html_css_js,
      name: "HTML CSS JS",
      description:
        "We constantly test both the software and its code to reduce risks and quickly identify potential bugs.",
    },
    {
      id: 4,
      logo: custom,
      name: "Custom",
      description:
        "Our software websites prioritize optimal results and comprehensive features to ensure a complete user experience.",
    },
  ];
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
          <title>It Experts | Web Services </title>
        </Helmet>

        <section
          className="web_services"
          style={{ backgroundImage: `url(${web_services})` }}
        >
          <div className="web_services_cont text-center">
            <h4 className="software_heading">
              SOFTWARE DEVELOPMENT
              <span> SERVICES FOR YOUR INNOVATIVE IDEAS</span>
            </h4>
            <p className="web_services_text text-center">
              We help our partners accelerate disruption both within their
              organizations and industries. They strategize new ideas and obtain
              real business value by getting the most out of our
              production-ready custom software development services. Talk to our
              experts today!
            </p>

            <Link to="/Contact" className="btn web_services_btn">
              Get In Touch
            </Link>
          </div>
        </section>

        {/* ----------- WEB SERVICES -----------   */}
        <section className="container services_showcase how_we_work my-1">
          <h1 className="services_showcase_title" style={{color:isDarkTheme?'white':'black'}}>
            OUR <span style={{color:'#f11900',fontWeight:'600'}}>WEB DEVELOPMENT  </span> SERVICES
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

          <div className="software_data mt-4 py-4" >
            <div className="row" >
              {softwareData.map((item) => (
                <div  key={item.id} className="col-lg-6 col-sm-12" >
                   
                  <div  className="data1 web_names">
                    <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                      <img src={item.logo} alt="" width="50px" />
                      <span className="mx-2">{item.name}</span>
                    </h1>
                    <p style={{ color: isDarkTheme ? "black" : "black" }}>
                      {item.description}
                    </p>
                  </div>
               

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------- WEB SERVICES -----------   */}
        <section className="container why_choose_it text-center my-4">
          <h2 className="why_choose_it_title" style={{color:isDarkTheme?'white':'black'}}>
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
                <img
                  src="images/spimgae.png"
                  className="thumbnailHover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Scroll/>
      </div>
    </>
  );
};

export default WebServices;
