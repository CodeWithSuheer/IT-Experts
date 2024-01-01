import React from "react";
import "./Graphic.css";
import graphic_header_img from "../../../../public/images/graphic_header_img.png";
import graphic_body from "../../../../public/images/graphic_body.png";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
const GraphicDesign = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className="py-3"
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | Graphic Designing </title>
      </Helmet>
      <div
        className="UIUXrow"
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "#f4f5f6",
          color: isDarkTheme ? "white" : "rgb(91, 91, 91)",
        }}
      >
        {/* ------------ GRAPHIC HEADER ------------ */}
        <div className="graphic_header">
          <div
            className="graphic_header_left mx-2"
            style={{ margin: "auto", marginLeft: 0 }}
          >
            <h4 className="graphic_header_title mt-2">
              Graphic Designing <br />
              <span
                style={{
                  color: isDarkTheme ? "white" : "black",
                  fontWeight: "700",
                }}
              >
                Services
              </span>
            </h4>
            <p className="uiuxtext">
              Elevate your brand with captivating graphic design services from
              IT experts. Our creative team blends innovation and aesthetics to
              deliver visually stunning designs that leave a lasting impression.
            </p>

            <p className="uiuxtext">
              Find robust From logos and branding to marketing materials and
              digital assets, our graphic design services cover a spectrum of
              visual elements to enhance your brand identity. Let us bring your
              ideas to life with creativity and precision.
            </p>
            {/* <button className="uiuxbutton"> Click Me</button> */}
          </div>

          <div className="graphic_header_right mx-2">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src={graphic_header_img} className="uiuximg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------ GRAPHIC SECTION - 1 ------------ */}
      <div className="container graphic_section_1">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src={graphic_body} className="uiuxgirlimg" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ margin: "auto" }}
          >
            <div
              className="uiuxgirlright py-4"
              style={{
                backgroundColor: isDarkTheme ? "#414165" : "#e9e9e9",
                borderRadius: "10px",
              }}
            >
              <h1 className="pt-2">
                Elevate Your Brand with Creative Graphic Design
              </h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "500",
                  textAlign: "justify",
                  color: isDarkTheme ? "white" : "#4d4d4d",
                  marginTop: "1rem",
                }}
              >
                Transforming brands with creative graphic design, our team at IT
                Experts delivers visually captivating designs that leave a
                lasting impression. Specializing in crafting custom graphics for
                a variety of purposes, we bring your brand to life with
                creativity and precision.
              </p>
              <h1 style={{ marginTop: 50 }}>
                Crafting Unique Visual Experiences
              </h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "500",
                  textAlign: "justify",
                  color: isDarkTheme ? "white" : "#4d4d4d",
                  marginTop: "1rem",
                }}
              >
                At IT-Experts, our graphic design services are rooted in a
                commitment to excellence. Guided by industry standards, our
                designers utilize proven systems, undergo thorough audits, and
                stay updated on the latest design practices and tools. Our
                structured approach ensures that each graphic element we create
                is not only visually appealing but also aligns seamlessly with
                your brand identity. Explore our portfolio to witness the unique
                visual experiences we've crafted for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ GRAPHIC SECTION - 2 ------------ */}
      <div className="container">
        <div className="row importants">
          <h1>
            Features of Our
            <span style={{ color: "#f11900", fontWeight: "600" }}>
              {" "}
              Graphic Designing{" "}
            </span>
            Services
          </h1>
          <p className="text-center py-1 fs-5">
            Elevate your brand with our comprehensive graphic design services.
            Backed by a rich heritage of creativity, our team excels at
            delivering visually stunning designs that captivate your audience.
            Explore the unique features that set our graphic design services
            apart:
          </p>
        </div>
      </div>

      {/* ------------ GRAPHIC SECTION - 3 ------------ */}
      <div className="uiux_img mx-auto col-lg-8" style={{ marginTop: 20 }}>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
        >
          <img
            src="/images/Graphic_Lifecycle.jpg"
            className="dekstopimg"
            alt=""
          />
        </div>
      </div>

      {/* ------------ GRAPHIC SECTION - 4 ------------ */}
      <section className="free-trial-area mt-5 ptb-100 my-5 py-5 bg-f4f5fe">
        <div className="container-fluid">
          <div className="free-trial-content py-4">
            <h2 className="mt-5">
              Crafting Excellence in{" "}
              <span style={{ color: "#f11900", fontWeight: "600" }}>
                {" "}
                Graphic Designing
              </span>{" "}
              Services
            </h2>

            <p className="pt-2 free-trial-para">
              We take pride in our meticulous research and analysis process,
              understanding the core of your brand and identifying the unique
              needs and goals. This commitment ensures the creation of
              personalized graphic designs that resonate deeply with your target
              audience.
            </p>
          </div>
        </div>
        <div className="shape10">
          <img src="images/10.png" alt="shp1" />
        </div>
        <div className="shape11">
          <img src="/images/7.png" alt="shp2" />
        </div>
        <div className="shape12">
          <img src="images/11.png" alt="shp3" />
        </div>
        <div className="shape13">
          <img src="images/12.png" alt="shp4" />
        </div>
      </section>

      <Scroll />
    </div>
  );
};

export default GraphicDesign;
