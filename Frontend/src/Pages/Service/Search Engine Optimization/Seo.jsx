import React from "react";
import "./Seo.css";
import { useTheme } from "../../../Theme/ThemeContext";
import Scroll from "../../../Component/ScrolltoTap/Scroll";
import { Helmet } from "react-helmet";
import analytics from "../../../../public/images/SEO_analytics.png";
import seo_banner from "../../../../public/images/seo_banner.jpg";
import seo_1 from "../../../../public/images/seo_1.jpg";
import seo_2 from "../../../../public/images/seo_2.jpg";
import seo_3 from "../../../../public/images/seo_3.jpg";
import seo_4 from "../../../../public/images/seo_4.jpg";
import seo_5 from "../../../../public/images/seo_5.jpg";
const Seo = () => {
  const { isDarkTheme } = useTheme();

  return (
    <>
      <div
        className="py-1"
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "#fff",
          color: isDarkTheme ? "white" : "black",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>It Experts | SEO </title>
        </Helmet>

        {/* ----------- SEO - HEADER ----------- */}
        <div
          className="searchengine"
          style={{ backgroundImage: `url(${seo_banner})` }}
        >
          <div className="seo_header_cont">
            <div className="seo_header">
              <div className="seo_left mx-0 ">
                <h4 className="search">
                  Search Engine{" "}
                  <span style={{ color: "#f11900" }}> Optimization</span>
                </h4>
                <p className="searchtext">
                  Get your website ranked on search engines. A strong online
                  presence is crucial to attracting potential customers and
                  serving their needs.
                </p>
                {/* <button className="getbutton">Get Quote</button> */}
              </div>

              <div className="seo_right develdiv mx-2">
                <div
                  data-aos="zoom-out-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration={2000}
                >
                  <img src="images/developer.png" className="develimg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ----------- SEO - SECTION -1  ----------- */}
        <div className="container seo_section_1">
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="seoServiceContainer">
                <h4 className="seoServiceHead">
                  <span style={{ color: "#f11900" }}>SEO</span> Services
                </h4>
              </div>
              <p className="seoservicetext mb-5">
                Ranking high in search engines is essential to building a strong
                online presence as it plays a key role in attracting potential
                customers and effectively meeting their needs. <br /> Being on
                the second page of search engines is not an option. Without an
                effective SEO strategy, you are missing out on great
                opportunities to maximize your income. Our services not only
                optimize your website for maximum traffic but also help build a
                reputable and trusted brand. IT-Expert offers state-of-the-art
                SEO services aimed at attracting your target audience and
                generating targeted traffic. Your investment is dedicated to the
                effective management of SEO campaigns by our experienced experts
                who have years of knowledge and data access to adapt your
                business strategies. Partnering with IT-Expert provides you with
                managed SEO services that include 100% white hat linking and
                quality content that brings your website to the first page of
                search engines.
              </p>
              {/* <button className="emptybutton" /> */}
            </div>

            <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12">
              <div
                data-aos="zoom-out-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src={seo_2} className="seoimg" alt="" />
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 mt-4">
              <div
                data-aos="zoom-out-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/Perfect_SEO.jpg" className="seoimg" alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 mt-4">
              <div className="d-flex">
                {/* <p
                  style={{
                    width: 40,
                    height: 12,
                    backgroundColor: "#F11900",
                    display: "flex",
                    marginTop: "1.1rem",
                    marginRight: "1rem",
                  }}
                ></p> */}
                <h4 className="seoServiceHead ">
                  A Perfect <span style={{ color: "#f11900" }}>SEO </span>
                  Requirements
                </h4>
              </div>
              <p className="seoservicetext">
                Our approach is methodical. Before implementing any SEO strategy
                for your company, we take the time to thoroughly understand your
                business objectives and needs. We believe in tailoring our
                approach to what works specifically for your brand. Therefore,
                we engage in collaborative sessions with you and our team to
                develop a customized plan, ensuring you achieve optimal results
              </p>
              <ul
                className="seoservicetext ms-3"
                style={{ listStyleType: "none", paddingLeft: 0 }}
              >
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Keyword Research
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Content Optimization
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Image Optimization
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Guest Posting
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Profile Creation
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Business Listings
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Social Bookmarking
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Technical SEO Solutions
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  Google Analytics
                </li>
                <li className="li_spacing" style={{ listStyle: "initial" }}>
                  100% White Hat SEO Strategy
                </li>
              </ul>
              {/* <button className="emptybutton" /> */}
            </div>
          </div>
        </div>

        {/* ----------- SEO - SECTION - 2  ----------- */}
        <div className="seoService  seo_section_2">
          {/* <img src=" images/USA.png " className="seoServiceImg img-fluid" alt="Seo-Service-USA" /> */}
          <p className="seoServiceUSAText">
            <span>
              In this technology driven competition, the only way to stay on the
              top is not only to interact with your customer efficiently, but to
              grow your reach to unimaginable limits. Let the world aware of you
              and your services by being on the top of Google search. We being
              the IT company We can help you out to rank your business on top of
              the Search Engine Results Pages.
            </span>
          </p>
        </div>

        {/* ----------- SEO - SECTION - 3  ----------- */}
        <div className="container seo_section_3">
          <div className="row Dbuildrow">
            <div className="col-lg-4 col-md-4 col-sm-5 text-end">
              <h4 className="seoStrategyHead">
                Our <br /> SEO <br />{" "}
                <span style={{ color: "gray", fontWeight: "bold" }}>
                  {" "}
                  Strategy{" "}
                </span>
              </h4>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="buildcreat">
                <h4 className=" buildcreatSubHead"> A)-Rank Monitoring </h4>
                <p className=" buildcreatSubHeadText">
                  We monitor rank of your website and build strategies to make
                  it No.1
                </p>
                {/* <br /> */}
                <h4 className="buildcreatSubHead mt-3">
                  {" "}
                  B)-World Wide Ranking
                </h4>
                <p className="buildcreatSubHeadText">
                  Our experts increase the visibility of your business
                  worldwide.
                </p>
                {/* <br /> */}
                <h4 className="buildcreatSubHead mt-3">
                  {" "}
                  C)-Competitor Research
                </h4>
                <p className="buildcreatSubHeadText">
                  Our team performs a complete analysis on competitors and build
                  strategies.
                </p>
              </div>
              {/* <button className="buildquotbutton">Details</button> */}
            </div>
          </div>
        </div>

        {/* ----------- SEO - SECTION - 4  ----------- */}
        <div className="container analytics my-3 seo_section_4">
          <div className="seo_partner">
            <div className="seo_partner_left">
              <h4 className="seo_partner_left-title">
                Why IT-Expert as{" "}
                <span style={{ color: "#f11900", fontWeight: "600" }}>
                  SEO{" "}
                </span>{" "}
                Partner?
              </h4>
              <p className="seo_partner_text">
                We take a methodical approach and take the time to thoroughly
                understand the specific business goals of your website. Rather
                than implementing a blanket SEO strategy, we believe in
                tailoring our approach to what works best for your brand. Our
                process involves collaborative sessions with you and our team to
                carefully create a plan that ensures optimal results. We
                prioritize in-depth keyword research and perform competitive
                analysis to identify your competitors' current position. This
                way we can ensure a strategy that is not only customized but
                also aimed at achieving 100% success. Achieving first-page
                rankings on search engines requires a strategic blend of
                keywords, backlinks, and other SEO techniques. Our services are
                designed to optimize this combination, ensuring your brand
                effectively reaches its target audience and secures prominent
                visibility in search engine results.
              </p>
            </div>
            <div className="seo_partner_img">
              <img
                src={seo_3}
                alt=""
                style={{
                  borderRadius: "20px",
                  minHeight: "20rem",
                  minWidth: "33rem",
                }}
              />
            </div>
          </div>
        </div>

        {/* ----------- SEO - SECTION - 5  ----------- */}
        {/* <div className="container">
          <div
            className="row someOfOurWork"
            style={{
              backgroundColor: isDarkTheme ? "#242435" : "#fff",
              color: isDarkTheme ? "white" : "black",
            }}
          >
            <div className="col-lg-5 col-md-6 col-sm-12 someOfOurWorkHead ">
              <div className="d-flex">
                <h4
                  className="soworkt"
                  style={{
                    fontSize: "3rem",
                    lineHeight: 1,
                    fontWeight: "bold",
                  }}
                >
                  Some of our
                  <span style={{ color: "#f11900", fontWeight: "bold" }}>
                    {" "}
                    Work
                  </span>
                </h4>
                <p />
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  marginTop: ".9rem",
                }}
              >
                We’ve ranked a lot of websites for our clients. Our strategies
                ensure that they rank higher and reach the target audience using
                the right keywords.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/network.png" className="patalmg" alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/maping.png" className="serumimg" alt="" />
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 col-sm-12"
              style={{ paddingBottom: 10 }}
            >
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/graph.png" className="mobileimg" alt="" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="container mt-2">
          <div className=" row textimgdiv " style={{ marginTop: "5rem" }}>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="d-flex">
                <h4
                  className="seo"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                >
                  Precision in On-Site{" "}
                  <span style={{ color: "#f11900", fontWeight: "600" }}>
                    {" "}
                    Seo
                  </span>
                </h4>
              </div>
              <p className="onSiteText mt-2">
                Elevate your website's visibility and drive targeted traffic
                with our On-Page SEO services at IT-Experts. This essential
                first step involves optimizing your site and content for
                specific keywords. We focus on vital techniques such as
                strategic keyword placement, optimized headings, content
                quality, and technical considerations. Our approach is both
                smart and ethical, ensuring search engines recognize and
                prioritize your targeted keywords. On-page SEO improves not only
                your site's readability but also its search engine ranking.
                Trust IT-Experts we provide quality on-page optimization
                services, employing effective techniques and strategic
                strategies to enhance your SEO performance
              </p>
              <div className="d-flex mt-3">
                <h4
                  className="seo"
                  style={{
                    fontSize: "2.1rem",
                    fontWeight: "600",
                    paddingBlock: ".6rem",
                  }}
                >
                  Key Elements
                </h4>
              </div>
              <ul
                className="onSiteText"
                style={{ listStyleType: "initial", paddingLeft: 20 }}
              >
                <li style={{ paddingBlock: ".2rem" }}>Easy navigation</li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Content quality stands apart
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Keyword targeted and multi-device ready
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Design is of high quality
                </li>
                <li style={{ paddingBlock: ".2rem" }}>Uniquely valuable</li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Shared through social media networks
                </li>
              </ul>

              {/* <button className="emptybutton" /> */}
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12">
              <div
                data-aos="zoom-out-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src="images/Perfect_SEO.jpg" className="seoimg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row textimgdiv mt-1">
            <div className=" col-lg-5 col-md-12 col-sm-12 mt-5 OffSetImg">
              <div
                data-aos="zoom-out-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img src={seo_5} className="seoimg" alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 ">
              <div className="d-flex mt-1 ">
                <h4
                  className="seo"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "600",
                  }}
                >
                  Precision in Off Page{" "}
                  <span style={{ color: "#f11900", fontWeight: "600" }}>
                    {" "}
                    Seo
                  </span>
                </h4>
              </div>
              <p className="onSiteText">
                Off-page SEO, an important part of improving your website's
                credibility and search engine ranking, involves building links
                outside of your website. This external link building will help
                improve your Domain Authority (D.A) and improve your website and
                overall ranking. Basically, off-page SEO includes all the
                actions that are taken to secure the first page position in
                search engines. At IT-Experts, our dedicated SEO team
                specializes in building quality links to websites with
                significant domain authority, ensuring your website's exposure
                and visibility in search engines.
              </p>
              <div className="d-flex mt-2">
                <h4
                  className="seo"
                  style={{
                    fontSize: "2.1rem",
                    fontWeight: "600",
                    paddingBlock: ".8rem",
                  }}
                >
                  Off-Page SEO Services Factors
                </h4>
              </div>
              <ul
                className="onSiteText"
                style={{ listStyleType: "initial", paddingLeft: 20 }}
              >
                <li style={{ paddingBlock: ".2rem" }}>
                  Manual Directory Submission
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Content Distribution & Sharing
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Quality Article Submission
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Natural Link Development
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Online Business Listings
                </li>
                <li style={{ paddingBlock: ".2rem" }}>Reputation Management</li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Social Media Marketing
                </li>
                <li style={{ paddingBlock: ".2rem" }}>Social Bookmarking</li>
              </ul>

              {/* <button className="emptybutton" /> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" row textimgdiv mt-5">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="d-flex ">
                <h4
                  className="seo"
                  style={{
                    fontSize: "2.1rem",
                    fontWeight: "600",
                    paddingBlock: ".8rem",
                  }}
                >
                  Services Includes
                </h4>
              </div>
              <ul
                className="onSiteText"
                style={{
                  listStyleType: "inherit",
                  paddingLeft: 20,
                  marginBottom: "6rem",
                }}
              >
                <li style={{ paddingBlock: ".2rem" }}>
                  Competitor Backlink Analysis
                </li>
                <li style={{ paddingBlock: ".2rem" }}>Guest Posting</li>
                <li style={{ paddingBlock: ".2rem" }}>Social outreach</li>
                <li style={{ paddingBlock: ".2rem" }}>Blog Marketing</li>
                <li style={{ paddingBlock: ".2rem" }}>Document Submission</li>
                <li style={{ paddingBlock: ".2rem" }}>Article submission</li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Participation in Discussion Forums
                </li>
                <li style={{ paddingBlock: ".2rem" }}>
                  Video Submission and Promotion
                </li>
              </ul>
            </div>
            <div className=" col-lg-5 col-md-12 col-sm-12">
              <div
                data-aos="zoom-out-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <img
                  src="images/SEO.png"
                  className="serviceInclude"
                  style={{ marginTop: 0 }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Scroll />
      </div>
    </>
  );
};

export default Seo;
