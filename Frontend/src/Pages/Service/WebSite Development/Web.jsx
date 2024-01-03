import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
// import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
import { Helmet } from "react-helmet";
import Marquee from "react-fast-marquee";
import web_services from "../../../../public/images/web_service.jpg";
import "./Web.css";

const Web = () => {
  const { isDarkTheme } = useTheme();
  const gradient = !isDarkTheme;
  const images = [
    "images/Go.png",
    "images/Python.png",
    "images/Php.png",
    "images/Kotilin.png",
    "images/Swift.png",
    "images/Bootstrap.png",
    "images/MySQL.png",
    "images/Java.png",
    "images/Ror.png",
    "images/C.png",
    "images/JavaScript.png",
    "images/CSS3.png",
    "images/HTML5.png",
    "images/reactLogo.png",
    "images/React-native.png"
  ];
  return (
    <div
      className="web_dev"
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        color: isDarkTheme ? "white" : "black",
        paddingBottom: 20,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | WebSite Development </title>
      </Helmet>

      {/* <div className="row header_img" style={{ width: "100%", maxHeight: '40rem', overflowY: 'hidden', margin: 'auto', userSelect: 'none' }}>
        <img src="/images/web_dev_banner.jpg" alt="" style={{ width: "100%", maxHeight: '100%', backgroundPosition: 'center', backgroundPositionY: 'center', objectFit: 'cover' }} />
      </div> */}
      {/*<div class="bggraydiv"></div>  */}

      <section
        className="web_services"
        style={{
          backgroundImage: `url("https://cdn.shopify.com/s/files/1/0704/6378/2946/files/jefferson-santos-9SoCnyQmkzI-unsplash.jpg?v=1704171815")`,
        }}
      >
        <div className="web_services_cont text-center">
          <h4 className="software_heading">
            WEBSITE DEVELOPMENT
            <span> SERVICES FOR YOUR INNOVATIVE IDEAS</span>
          </h4>
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

      <div className="container">
        <div
          className="row webdiv"
          style={{
            backgroundColor: isDarkTheme ? "#242435" : "#fff",
            color: isDarkTheme ? "white" : "black",
          }}
        >
          <div className="col-lg-6 col-md-12 col-sm-12 develimgdiv">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <h2
                className="website my-3 text-lg-start text-md-center"
                style={{ color: isDarkTheme ? "white" : "black" }}
              >
                Website
                <span style={{ color: "#F11900", fontWeight: "600" }}>
                  {" "}
                  Development{" "}
                </span>
              </h2>
              <p className="countryimg">
                <span
                  className="webtext"
                  style={{
                    backgroundColor: isDarkTheme ? "transparent" : "#fff",
                    color: isDarkTheme ? "black" : "black",
                  }}
                >
                  Your online presence harnesses the power to attract clients.
                  Our website design services aim to provide the best user
                  experience to enhance your website and bring productive
                  outcomes. The professionals at IT Experts ensure to adhere to
                  the top-notch technologies for web development and ensure that
                  each element is in accordance to your brand’s identity.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img
                src="images/Imagedev.png"
                className="img-fluid w-100"
                alt=""
              />
              {/* <div className="row customword">
              <div className="col-lg-6 col-12">
                <p
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#F11900",
                    margin: "50px 0 0 30px",
                    lineHeight: "0.2"
                  }}
                >
                  <span
                    style={{ marginLeft: 30, fontSize: 30, fontWeight: "bold" }}
                  >
                    Customized
                  </span>
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <p
                  style={{
                    width: 12,
                    height: 12,
                    backgroundColor: "#F11900",
                    margin: "50px 0 0 35px",
                    lineHeight: "0.2"
                  }}
                >
                  <span
                    style={{ marginLeft: 30, fontSize: 30, fontWeight: "bold" }}
                  >
                    Wordpress
                  </span>
                </p>
              </div>
            </div> */}
              {/* <button className="webquotbutton">Get Quote</button> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="container my-5 py-3 "
        style={{ marginInline: "auto", maxWidth: "97%" }}
      >
        <div className="row py-3">
          <div className="col-md-6  col-sm-12" style={{ margin: "auto" }}>
            <div className="text-lg-end text-md-start">
              <h1 className="webuild">
                <span className="slogan1">We</span>
                <br /> <span className="slogan2">build</span> <br />
                <span className="slogan3">Website</span>
              </h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="fs-5 d-flex h-100 w-100 justify-content-center align-items-center">
              We excel in crafting websites that actively engage your customers,
              showcasing captivating landing pages that foster customer
              acquisition and retention. Whether it's Static, Dynamic, Business,
              or E-commerce, our emphasis is on conveying your brand identity
              while prioritizing an exceptional user experience.
            </p>
            {/* <button className="buildquotbutton mb-5">Get Quote</button> */}
          </div>
        </div>
      </div>

      <div className="container my-5 py-2">
        <h1 className=" text-center my-5">
          <span className="serviceHead deal_text">WE DEAL IN</span>
        </h1>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 my-3 ">
            <img src="images/Static.png" className="img-fluid w-100" alt="" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-3">
            <img src="images/Dynamic.png" className="img-fluid w-100" alt="" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-3">
            <img src="images/Business.png" className="img-fluid w-100" alt="" />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-3">
            <img
              src="images/Ecommerce website.png"
              className="img-fluid w-100"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container my-5 px-5 py-5">
        <Marquee
          speed={50}
          pauseOnHover
          gradient={gradient}
          gradientWidth={100}
        >
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="img-fluid mx-4"
              style={{ height: "4.8rem" }}
              alt={`Image ${index + 1}`}
            />
          ))}
        </Marquee>
      </div>
      <Scroll />
    </div>
  );
};

export default Web;
