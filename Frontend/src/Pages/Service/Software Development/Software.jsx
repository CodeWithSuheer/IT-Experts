import React from "react";
import "./Software.css";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Helmet } from "react-helmet";
const Software = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        color: isDarkTheme ? "white" : "black",
        paddingBottom: 100,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | Software Development </title>
      </Helmet>

      <div className="Explorers">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <h4 className="software_heading">Software Development</h4>
              <p className="software_text text-center">
                Software development involves strategic planning, refinement and
                computer programs tailored to your needs. Our team works closely
                with you to assimilate, and meet your specific technical
                requirements.
              </p>
            </div>
            <div className="col-lg-8" />
          </div>
        </div>
      </div>

      {/* ----------- HOW WE WORK -----------   */}
      <div className="container how_we_work">
        <h1 className="how_we_work_h1">
          <span style={{ color: "#F11900", fontWeight: "600" }}>What We </span>
          Cover
        </h1>
        <p
          className="how_we_work_p"
          style={{ color: isDarkTheme ? "white" : "black" }}
        >
          We offer a comprehensive range of software development services
          customized to meet your specific requirements.
        </p>

        <div className="software_data mt-4">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="data1">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <span>Software Prototyping</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  Our process begins with the creation of a software prototype,
                  which ensures a flawless final product.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="data1">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <span>Cybersecurity</span>
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
              <div className="data1">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <span>Q/A Testingn</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  We constantly test both the software and its code to reduce
                  risks and quickly identify potential bugs.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="data1">
                <h1 style={{ color: isDarkTheme ? "black" : "black" }}>
                  <span>Web Application Development</span>
                </h1>
                <p style={{ color: isDarkTheme ? "black" : "black" }}>
                  Our software websites prioritize optimal results and
                  comprehensive features to ensure a complete user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- WE BUILD SOFTWARES -----------   */}
      <div className="container my-5 py-3">
        <div className="row py-3">
          <div className="col-md-6 col-sm-12" style={{ margin: "auto" }}>
            <div className="text-lg-end text-md-start">
              <h1 className="webuild">
                <span className="slogan1">We</span>
                <br /> <span className="slogan2">build</span> <br />
                <span className="slogan3">Softwares</span>
              </h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="fs-5 d-flex h-100 w-100 justify-content-center align-items-center">
              We excel in crafting Softwares that actively engage your
              customers, showcasing captivating landing pages that foster
              customer acquisition and retention. Whether it's Static, Dynamic,
              Business, or E-commerce, our emphasis is on conveying your brand
              identity while prioritizing an exceptional user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="container  px-sm-10 mt-3 mb-5 py-3">
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

      {/* <div className="softwareimg">
        <div className="container">
          <div className="row" style={{ display: "block" }}>
            <div className="col-lg-8 col-md-10 col-sm-12 softwarediv">
              <h4 className="softwaretext">Software Development</h4>
              <p className="development">
                Software development involves strategic planning, refinement and
                computer programs tailored to your needs. Our team works closely
                with you to assimilate, and meet your specific technical
                requirements.
              </p>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-12" />
          </div>
        </div>
      </div>

      <div className="sdworkimg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 workdiv">
              <div className="headdiv">
                <p
                  style={{
                    width: 40,
                    height: 8,
                    backgroundColor: "#F11900",
                    display: "flex"
                  }}
                ></p>
                <p className="sdwork">How We Work</p>
                <p />
              </div>
              <p className="sdworktext">
                Our approach involves creating technical standards that our
                developers must adhere to and ensure quality work.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" />
          </div>
          <div className="row sdimgsdiv">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div
                data-aos="fade-up-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <p className="squoteimg">
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12" />
            <div className="col-lg-5 col-md-5 col-sm-12">
              <div
                data-aos="fade-up-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <p className="sstudyimg">
                  <span className="sstudytext">Case Study</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row spersonimgdiv" style={{ backgroundColor: isDarkTheme ? '#242435' : 'rgb(250, 248, 248)', color: isDarkTheme ? 'white' : 'black' }}>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <LazyLoadImage effect='blur' placeholderSrc='images/placeholder.png' src="images/sdgirl.png" className="sdimg25" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h4 className="text25">What We Cover</h4>
            <p>
              We offer a comprehensive range of software development services
              customized to meet your specific requirements.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6" >
                <h4 className="scroll">
                  {" "}
                  <i
                    className="fa-solid fa-camera me-2 pt-1"
                    style={{ fontSize: 30, color: "crimson" }}
                  />
                  Software Prototyping
                </h4>
                <p className='py-1'>
                  Our process begins with the creation of a software prototype,
                  which ensures a flawless final product.
                </p>
                <h4 className="persuasion">
                  {" "}
                  <i
                    className="fa-regular fa-image  me-2 pt-1"
                    style={{ fontSize: 30, color: "crimson" }}
                  />
                  Q/A Testingn
                </h4>
                <p className='py-1'>
                  We constantly test both the software and its code to reduce
                  risks and quickly identify potential bugs.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6" >
                <h4 className="brand">
                  {" "}
                  <i
                    className="fa-solid fa-gem  me-2 pt-1"
                    style={{ fontSize: 30, color: "crimson" }}
                  />
                  Cybersecurity
                </h4>
                <p className='py-1'>
                  The inclusion of cyber security measures is an integral part
                  of the software's protection of all data from possible
                  malicious attacks.
                </p>
                <h4 className="negative">
                  {" "}
                  <i
                    className="fa-regular fa-comment  me-2 pt-1"
                    style={{ fontSize: 30, color: "crimson" }}
                  />
                  Web Application Development
                </h4>
                <p className='py-1'>
                  Our software websites prioritize optimal results and
                  comprehensive features to ensure a complete user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Scroll />
    </div>
  );
};

export default Software;
