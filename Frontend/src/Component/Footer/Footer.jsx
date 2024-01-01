import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ExternalLink } from "react-external-link";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { useTheme } from "../../Theme/ThemeContext";
import { useSelector } from "react-redux";

export const Footer = () => {
  const { isDarkTheme } = useTheme();
  const token = localStorage.getItem("token");
  const location = useLocation();

  // console.log("footer token:", token);
  // console.log("footer location:", location.pathname);

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("footer useEffect token:", token);
    // console.log("footer useEffect location:", location.pathname);
  }, [location]);

  const isAdminPanelRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!token && !isAdminPanelRoute ? (
        <>
          <section>
            <footer
              className="footer-area pb-5"
              style={{
                backgroundColor: isDarkTheme ? "black" : "black",
                color: isDarkTheme ? "white" : "white",
              }}
            >
              <div
                className="divider"
                style={{
                  backgroundColor: isDarkTheme ? "black" : "black",
                  color: isDarkTheme ? "white" : "white",
                }}
              />
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <div className="logo">
                        <a href="#">
                          <img src="/images/ITEXPERTS_LOGO.png" alt="image" />
                        </a>
                      </div>
                      <p className="fs-5 ms-1">
                        We work with passion of taking <br /> challenges and new
                        ones <br /> in advertising sector.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3 className="fs-3">Company</h3>
                      <ul className="services-list">
                        <li>
                          <Link to="About">About Us</Link>
                        </li>
                        <li>
                          <Link to="Blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="Contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="Work">Our Pricing</Link>
                        </li>
                        <li>
                          <Link to="Blog">Latest News</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3 className="fs-3">Support</h3>
                      <ul className="support-list">
                        <li>
                          <a href="faq.html">FAQ's</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="about.html">Community</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                      <h3 className="fs-3">Contact Info</h3>
                      <ul className="footer-contact-info">
                        <li>
                          <HashLink className="fs-5" to="/contact#map">
                            office # 20، shabnam center, Shalimar Link Road,
                            Ramgarh, Lahore, Punjab 54000, Pakistan
                          </HashLink>
                        </li>
                        <li>
                          Email:{" "}
                          <ExternalLink
                            className="fs-5"
                            href="mailto:strax@cybersolclub.com"
                          >
                            info@it-experts.com.pk
                          </ExternalLink>
                        </li>
                        <li>
                          Phone:{" "}
                          <a className="fs-5" href="tel:+92 320 851 2825">
                            042-36860072
                          </a>
                        </li>
                      </ul>
                      <ul className="social mt-3">
                        <li>
                          <ExternalLink
                            href="https://www.facebook.com/itexpertsofficial?mibextid=9R9pXO"
                            target="_blank"
                          >
                            <FaFacebookF />
                          </ExternalLink>
                        </li>
                        <li>
                          <Link to="//google.com">
                            <FaXTwitter />
                          </Link>
                        </li>
                        <li>
                          <ExternalLink
                            href="https://pk.linkedin.com/company/it-experts-pakistan1"
                            target="_blank"
                          >
                            <GrLinkedinOption />
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink
                            href="https://www.instagram.com/invites/contact/?i=nnkprelmgyb8&utm_content=q12t82c"
                            target="_blank"
                          >
                            <FaInstagram />
                          </ExternalLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="go-top">
              <i className="bx bx-chevron-up" />
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default Footer;
