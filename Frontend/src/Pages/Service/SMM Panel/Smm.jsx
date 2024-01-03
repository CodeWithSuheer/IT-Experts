import React, { useEffect, useRef } from "react";
import CircularProgress from "../../About/Changing";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
import { Helmet } from "react-helmet";
import "./Smm.css";

const Smm = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "#fff",
          color: isDarkTheme ? "white" : "black",
          paddingBottom: 40,
        }}
      >
        {/* ----------------- HELMET ----------------- */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>IT Experts |Social Media Marketing </title>
        </Helmet>

        <div
          className=" row "
          style={{ backgroundColor: isDarkTheme ? "#242435" : "#f4f5f6" }}
        >
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/smm.jpg?v=1704103856" className="smmimg" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 SMMpanel">
            <h3 className="fw-bold" style={{ fontSize: "3.2rem" }}>
              What is{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>SMM</span>?
            </h3>
            <p
              style={{
                fontSize: "1.15rem",
                textAlign: "justify",
                fontWeight: "400",
                paddingTop: ".7rem",
              }}
            >
              {" "}
              Social Media Marketing, or SMM, helps you to connect with your
              audience on a personal level using platforms like Instagram,
              Facebook, Twitter, and more. It focuses on helping you gain
              organic followers and direct organic followers to your website
              using these platforms. It also gives you the opportunity to
              understand your customer’s needs and address any concerns that
              they might have.
            </p>
            {/* <button className="button">Services</button> */}
          </div>
        </div>

        {/* ----------------- SECTION NO 1 ----------------- */}
        <div className="container socialmedia ">
          <div className="row mx-auto pt-5">
            <div className="col-lg-3 col-md-6 col-sm-12 p-3 instaIconSMM">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/instagram.png"
                  alt=""
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div
                className="pt-3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h5 className="fs-4  fw-bold">Instagram</h5>
                <p className="fs-5" style={{ fontWeight: "500" }}>
                  Services
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/Facebook.png"
                  alt=""
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div
                className="pt-3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h5 className="fs-4 fw-bold">Facebook</h5>
                <p className="fs-5" style={{ fontWeight: "500", marginTop: 1 }}>
                  Services
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/youtube.png"
                  alt=""
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div
                className="pt-3"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h5 className="fs-4 fw-bold">Youtube</h5>
                <p className="fs-5" style={{ fontWeight: "500", marginTop: 1 }}>
                  Services
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/twitch.png"
                  alt=""
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div
                className="pt-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h5 className="fs-4 fw-bold">Linkdln</h5>
                <p className="fs-5" style={{ fontWeight: "500", marginTop: 1 }}>
                  Services
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-3">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/twitch.png"
                  alt=""
                  style={{ width: 110, height: 110 }}
                />
              </div>
              <div
                className="pt-1"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h5 className="fs-4 fw-bold">Twitch</h5>
                <p className="fs-5" style={{ fontWeight: "500", marginTop: 1 }}>
                  Services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 2 ----------------- */}
        <div className="container my-5 pt-4">
          <div className="row webSMMmob">
            <div className="col-lg-8 col-md-12 col-sm-12 m-auto">
              <p
                className="specialweb mediaMerketing"
                style={{ color: isDarkTheme ? "white" : "#252525" }}
              >
                Social
                <span style={{ fontWeight: "bold", color: "#f11900" }}>
                  {" "}
                  Media{" "}
                </span>
                Marketing
              </p>
              <p className="mediaMerketingText">
                Our social media experts harness the power of platforms like
                Instagram, Facebook, Twitter, and more to boost your content and
                post content that brings your customers closer to your brand. We
                ensure that the brand identity stays consistent across all
                platforms to enhance your brand’s image.
              </p>
            </div>
            <div className="offset-lg-1 col-lg-3 offset-md-2 col-md-10 col-sm-10">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/mOBIILLLE.png" className="SMMImage" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 3 ----------------- */}
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/sgirl.png" className="packageimg" alt="" />
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12" />
            <div className="col-lg-5 col-md-5 col-sm-12 ourPackageText">
              {/* <div className='d-flex'> */}
              {/* <p className='package_text_line'
              style={{
                width: 40,
                height: 10,
                backgroundColor: "#F11900",
                display: "flex",
                marginTop: '15px'
              }}
            ></p> */}
              <h4 className="ourPackage">
                Our{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Package
                </span>
              </h4>
              {/* </div> */}
              <p className="ourPackageText">
                Our social media packages are extremely cost-effective and can
                be customized according to your requirements. Please fill out
                the form the get a quote from our team.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 4 ----------------- */}
        <div className="container buisnessExpandBox my-5 pt-4">
          <div className="row webSMMmob">
            <div className="col-lg-7 col-md-12 col-sm-12 pt-1">
              <h4 className=" buisnessExpand" style={{ color: isDarkTheme ? "white" : "black" }}>
                Expand business with highly targeted{" "}
                <span style={{ fontWeight: "bold", color: "red" }}>
                  Social Media Marketing (SMM)
                </span>{" "}
                campaigns
              </h4>
              <p className="buisnessExpandText">
                Since its inception, IT-Expert has consistently led the way
                using our innovative and unconventional strategies to help many
                businesses. Our digital marketing experts have the skills to
                create social media campaigns that give your brand the
                exceptional digital exposure it deserves.
              </p>
            </div>
            <div className=" col-lg-4 col-md-10 col-sm-12">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/Expand_buissness.jpg"
                  className="expandBuissnessImg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 5 ----------------- */}
        <div className="container my-5 pt-5">
          <div className="row webSMMmob">
            <div className=" col-lg-4 col-md-10 col-sm-10">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/Increase_People.jpg"
                  className="increaseAudienceImg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 pt-2 ms-5 IncreaseTraficText">
              <h4 className=" IncreaseTrafic" style={{color:isDarkTheme?'white':'black'}}>
                Increase your{" "}
                <span style={{ fontWeight: "bold", color: "red" }}>
                  Website Traffic
                </span>{" "}
                and increase{" "}
                <span style={{ fontWeight: "bold", color: "red" }}>
                  Audience
                </span>
              </h4>
              <p className="buisnessExpandText">
                Using Social Media Marketing (SMM) is a very effective way to
                promote any business and ensure maximum exposure to your
                customer base. This strategy helps to find new opportunities and
                effectively reach a wider customer base.
              </p>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 6 ----------------- */}
        <div className="container my-5 pt-2">
          <div className="row ">
            <div className="col-lg-5 col-md-5 col-sm-12 ourPackageText">
              <h4 className=" buisnessExpand pt-3">
                Advantages of{" "}
                <span style={{ fontWeight: "bold", color: "red" }}>
                  Social Media Marketing
                </span>
              </h4>
              <ul
                className="buisnessExpandText"
                style={{ listStyleType: "none", paddingLeft: 0 }}
              >
                <li className="pb-2">
                  &#11162; Leveraging Social Media Marketing{" "}
                </li>
                <li className="pb-2">
                  &#11162; Establishing Your Social Presence{" "}
                </li>
                <li className="pb-2">&#11162; Enhancing Your Insights</li>
                <li className="pb-2">&#11162; Contributing to SEO Ranking </li>
                <li className="pb-2">&#11162; Prompt Feedback </li>
                <li className="pb-2">&#11162; Expanding Your Visibility</li>
                <li className="pb-2">&#11162; Cost-Effectiveness</li>
              </ul>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12 pt-5">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/Advantages.jpg"
                  className="advantageImg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- SECTION NO 7 ----------------- */}
        <div className="container col-lg-10 pt-1 pb-5 mt-lg-5">
          <h4 className=" buisnessExpand mt-5">
            How{" "}
            <span style={{ fontWeight: "bold", color: "red" }}>
              Social Media Marketing
            </span>{" "}
            Works?
          </h4>
          <ul>
            <li>
              {" "}
              <h5 className="fs-4 fw-bold mb-0 mt-3"> SMM Strategy</h5>
            </li>
            <p className="my-0 fs-5">
              Our team works together to create a business specific strategy to
              quickly improve your social presence.
            </p>
            <li>
              {" "}
              <h5 className="fs-4 fw-bold mb-0 mt-3"> Content Generation</h5>
            </li>
            <p className="my-0 fs-5">
              Content is crucial to promoting a business. Our team uses a
              variety of content production styles to maximize reach.
            </p>
            <li>
              {" "}
              <h5 className="fs-4 fw-bold mb-0 mt-3"> SMM Campaigns</h5>
            </li>
            <p className="my-0 fs-5">
              Various social media campaigns are implemented for our clients
              companies to generate as many leads as possible.
            </p>
          </ul>
        </div>

        {/* ----------------- SECTION NO 8 ----------------- */}
        <div className="container counting">
          <div className="row solvediv">
            <h4 className="mediaSolutions">Social Media Solutions</h4>
            <p className="mediaSolutionsText" style={{ fontWeight: "500" }}>
              Get in touch with us today to receive personalized social media
              strategies that help you gain more followers and enhance your
              marketing on social platforms.
            </p>
          </div>
          <div
            className="row my-4 col-sm-12"
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
    </>
  );
};

export default Smm;
