import React, { useEffect, useRef } from "react";
import { useTheme } from "../../Theme/ThemeContext";
import Scroll from "../../Component/ScrolltoTap/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import Animation from "../../Component/ScrollAnimation/Animation";
import CircularProgress from "./Changing";
import "./About.css";
const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        color: isDarkTheme ? "white" : "black",
        paddingBottom: "20px",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | About </title>
      </Helmet>

      <div className="WITEXPERTS">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 col-md-12 col-sm-12 aboutHead">
              <h4 className="whoit">What defines IT Experts?</h4>
              <p className="whotext">
                IT Experts is committed to creating a superior digital presence
                for its clients. Whether your online business is based in
                Pakistan or across the globe, we aim to increase your revenue
                through cutting-edge technology. Our team is dedicated to ensure
                that your target audience not only activates the web, but also
                promotes your business and achieves higher rankings. To achieve
                this, we carefully consider every detail and take into account
                the latest trends and technology in technology. Our
                comprehensive range of technical services covers everything from
                application development to cloud computing and more.
              </p>
              {/* <button className="quoteab">Get Quote</button> */}
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 imgdiv">
              <div
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration={2000}
                className="d-flex justify-content-center align-items-center h-100 w-100"
              >
                <img
                  src="images/Image Banner.png"
                  className="bannnerimg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row aboutdiv">
        <div className="col-lg-1" />
        <div
          className="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 px-4"
          style={{ paddingInline: "1rem" }}
        >
          <h4 className="about">WHO WE ARE.</h4>
          <p className="abouttext">
            At IT experts, we prioritize our customers’ needs and direct our
            efforts towards the ultimate goal of providing optimal solutions.
            Our primary mission is to provide innovative services with
            uncompromising quality. Some of the valuable features of our company
            include…
          </p>

          <div className="about_media">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <LazyLoadImage placeholderSrc='images/placeholder.png'
          effect='blur'
            src="images/01.png"
            alt=""
            width={100}
            height={50}
            style={{ paddingRight: 10, objectFit: "cover" }}
          /> */}
              <div>
                <h4 className="Integrity">Why Choose IT Experts?</h4>
                {/* <p className="about_para" style={{ lineHeight: 1, fontSize: 18 }}>
              We uphold strong ethical standards when working with all our
              clients.
            </p> */}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="images/01.png"
                alt=""
                width={100}
                height={50}
                style={{ paddingRight: 10, objectFit: "cover" }}
              />
              <div style={{ padding: 8 }}>
                <p className="integritySubHeading ms-3">
                  Reliable and Connected
                </p>
                <p className="about_para ms-3">
                  Our clients have trusted us to make complex decisions and we
                  have always delivered on our promise and we believe strong
                  long-term relationships based on moral grounds are critical
                  for the growth of any organization.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="images/02.png"
                alt=""
                width={100}
                height={50}
                style={{ paddingRight: 10, objectFit: "cover" }}
              />
              <div style={{ padding: 8 }}>
                <p className="integritySubHeading">
                  Leaders and Process-Oriented
                </p>
                <p className="about_para">
                  Hire developers who know the ins & outs of the industry and
                  are committed to delivering value to every client. We simplify
                  processes by outlining every step and deliver products without
                  compromising on the quality.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="images/03.png"
                alt=""
                width={100}
                height={50}
                style={{ paddingRight: 10, objectFit: "cover" }}
              />
              <div style={{ padding: 8 }}>
                <p className="integritySubHeading">Efficient and Competent</p>
                <p className="about_para">
                  Our focus is the timely delivery of the product and we ensure
                  that you have more time to market it. We have highly
                  experienced developers in our team who are skilled in a
                  diverse set of technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration={2000}
            className="img100"
          >
            <img src="images/Image 2.png" className="imgabout" alt="" />
          </div>
        </div>
      </div>

      <div className="container my-5 py-4">
        <div className="row specialbox">
          <div className="col-lg-6 col-md-6 col-sm-12 spequot">
            <h4
              className="specialist"
              style={{ color: isDarkTheme ? "white" : "black" }}
            >
              <span style={{ color: "#F11900", fontWeight: "600" }}>
                IT-Expert
              </span>{" "}
              Virtuoso
            </h4>
            <p
              className="specialist_pera"
              style={{
                color: isDarkTheme ? "white" : "black",
                fontWeight: 400,
                fontSize: "1.2rem",
              }}
            >
              Our goal is to create holistic IT solutions tailored to your needs
              while attracting the ideal target audience to improve the reach of
              your online business.
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

      <div className="container counting pt-5 mb-5">
        <div className="row solvediv">
          <h4 className="solve">We handle and solve your IT problems.</h4>
          <p className="creat pt-3 mb-5 ">
            Do you want to improve the design of your website or create a new
            application? IT Experts is your all-in-one solution for all digital
            requirements.
          </p>
        </div>
        <div
          className="row col-sm-12"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "30px",
          }}
        >
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* <div class="round-circle"></div> */}
            <CircularProgress
              identifier="service1"
              startValue={0}
              endValue={90}
              speed={30}
              circleColor="#F11900"
            />

            {/* <img src="images/cir1.png" class="ringimg" alt=""> */}
            <p className="itser">IT Services</p>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress
              identifier="development1"
              startValue={0}
              endValue={85}
              speed={30}
              circleColor="#F11900"
            />

            {/* <img src="images/cir1.png" class="ringimg" alt=""> */}
            <p className="itser">Development</p>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress
              identifier="development3"
              startValue={0}
              endValue={80}
              speed={30}
              circleColor="#F11900"
            />

            {/* <img src="images/cir1.png" class="ringimg" alt=""> */}
            <p className="itser">UI Designs</p>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress
              identifier="development6"
              startValue={0}
              endValue={76}
              speed={30}
              circleColor="#F11900"
            />

            {/* <img src="images/cir1.png" class="ringimg" alt="">  */}
            <p className="itser">Product Identity</p>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <CircularProgress
              identifier="development7"
              startValue={0}
              endValue={100}
              speed={30}
              circleColor="#F11900"
            />

            {/* <img src="images/cir1.png" class="ringimg" alt="">  */}
            <p className="itser">Experience</p>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default About;
