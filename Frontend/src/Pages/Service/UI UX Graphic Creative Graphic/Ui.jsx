import React from "react";
import "./Ui.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Helmet } from "react-helmet";
import uiux from "../../../../public/images/ui-ux.jpg";
const Ui = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div
      className="py-1"
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | UI UX Design </title>
      </Helmet>

      <section
        className="web_services"
        style={{
          backgroundImage: `url(${uiux})`,
        }}
      >
        <div className="web_services_cont text-center">
          <h4 className="software_heading">UI & UX Design Services</h4>
          <Link to="/Contact" className="btn web_services_btn">
            Get In Touch
          </Link>
        </div>
      </section>

      <div
        className="UIUXrow"
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "#f4f5f6",
          color: isDarkTheme ? "white" : "rgb(91, 91, 91)",
        }}
      >
        <div className="row">
          <div className="col-lg-1" />
          <div
            className="col-lg-4 col-md-5 col-sm-12"
            style={{ margin: "auto", paddingInline: "2rem" }}
          >
            <h4 className="uiux">
              UI & UX
              <span style={{ color: isDarkTheme ? "white" : "#242435" }}>
                Design Services
              </span>
            </h4>
            <p className="uiuxtext">
              Experience cutting-edge UI and UX design services with IT experts,
              where innovation meets efficiency. Our own creative unit functions
              as a design studio in a complete software company. From
              prototyping to testing and customer experience research, we are
              committed to delivering great mobile and web apps and ensuring
              excellence at every step of the process.
            </p>

            <p className="uiuxtext">
              Find robust software solutions with our UI/UX design services.
              From molding rudimentary event apps into interactive experiences
              to crafting enterprise software for companies, our seasoned design
              team brings your every idea to life with cutting-edge tools and
              technologies.
            </p>
            {/* <button className="uiuxbutton"> Click Me</button> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/UIUXimg.png" className="uiuximg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* //Header End// */}
      {/* //Main Body// */}

      <div className="container">
        <div className="row" style={{ marginTop: 80 }}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/uiuxgirl.png" className="uiuxgirlimg" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ margin: "auto" }}
          >
            <div
              className="uiuxgirlright py-4"
              style={{
                backgroundColor: isDarkTheme ? "#414165" : "rgb(209 210 212)",
                borderRadius: "10px",
              }}
            >
              <h1 className="pt-2">Multi-Industry Expertise User</h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "500",
                  textAlign: "justify",
                  color: isDarkTheme ? "white" : "#4d4d4d",
                  marginTop: "12px",
                }}
              >
                Transforming businesses across industries, our UX design
                services by IT experts have left an indelible mark. Our design
                team specializes in creating custom applications and software
                systems for various industries. Using deep root cause analysis
                and our user interface design expertise, we customize
                interactive user interfaces and complex animations for an
                immersive user experience. Our careful post-analysis ensures
                powerful and smooth cross-platform utility that produces a
                beautifully polished product that seamlessly blends aesthetics
                and functionality. Whether it's healthcare, retail or anything
                in between, our expertise is ready to take your digital
                experience to unprecedented heights.
              </p>
              <h1 style={{ marginTop: 50 }}>Primed for Perfection</h1>
              <p
                style={{
                  fontSize: "1.15rem",
                  fontWeight: "500",
                  textAlign: "justify",
                  color: isDarkTheme ? "white" : "#4d4d4d",
                  marginTop: "12px",
                }}
              >
                At IT-Experts, providing cutting-edge UI/UX design services is
                ingrained in our ethos, guided by established internal standards
                that guide creativity through a structured lens. Our designers
                follow proven systems, undergo thorough audits and gain
                knowledge of effective practices and tools. Ongoing training
                ensures that our design team is not only experienced, but also
                well organized and able to consistently deliver excellence. The
                success of this structured approach is evidenced by numerous
                case studies that demonstrate the unique service we inevitably
                provide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row importants">
          <h1>Features of Our UI and UX Design Services</h1>
          <p className="text-center py-3 fs-5">
            With a renowned heritage, our team excels at creating an intuitive
            and cohesive user experience that ensures your customers enjoy your
            product or website. Our commitment
          </p>
        </div>
      </div>

      <div className="uiux_img mx-auto" style={{ marginTop: 20 }}>
        <div
          data-aos="zoom-in-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
        >
          <img src="/images/uiux.png" className="dekstopimg" alt="" />
        </div>
      </div>

      <section className="free-trial-area mt-5 ptb-100 my-5 py-5  bg-f4f5fe">
        <div className="container">
          <div className="free-trial-content py-4">
            <h2 className="mt-5" style={{ fontWeight: "700" }}>
              How We Deliver Perfection WithOur Exemplary UI & UX Design
              Services
            </h2>
            <p className="pt-3">
              With a renowned heritage, our team excels at creating an intuitive
              and cohesive user experience that ensures your customers enjoy
              your product or website. Our commitment includes deep research and
              analysis, identifying user needs and goals, to ensure a
              personalized end product that resonates with your audience.
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

export default Ui;
