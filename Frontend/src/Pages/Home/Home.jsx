import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { useTheme } from "../../Theme/ThemeContext";
import Scroll from "../../Component/ScrolltoTap/Scroll";
import { Helmet } from "react-helmet";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const Home = () => {
  const [init, setInit] = useState(false);

  const { isDarkTheme } = useTheme();
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const animate = (obj, initVal, lastVal, duration) => {
    let startTime = null;

    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min((currentTime - startTime) / duration, 1);
      obj.current.innerHTML = Math.floor(
        progress * (lastVal - initVal) + initVal
      );

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start the counting animation when the counting section is in the viewport
        animate(text1Ref, 0, 350, 2000);
        animate(text2Ref, 0, 325, 2000);
        animate(text3Ref, 0, 300, 2000);

        // Unsubscribe from further intersection events
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const countingSection = document.querySelector(".counting");

    if (countingSection) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5,
      });

      // Start observing the counting section
      observer.observe(countingSection);

      // Clean up the observer when the component unmounts
      return () => observer.disconnect();
    }
  }, []);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      style={{
        backgroundColor: isDarkTheme ? "#242435" : "#fff",
        paddingBottom: "20px",
        paddingInline: ".2rem",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts | Home </title>
      </Helmet>

      <Particles
        className="tsparticles"
        init={initParticlesEngine}
        particlesLoaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: { value: isDarkTheme ? "#000" : "rgb(250, 248, 248)" },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              color: { value: isDarkTheme ? "#fff" : "#000" },
              opacity: 1,
            },
            enable: false,
          },
          clear: true,
          defaultThemes: {},
          delay: 0,
          fullScreen: { enable: false, zIndex: 0 },
          detectRetina: true,
          duration: 0,
          fpsLimit: 12,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: true,
                mode: "grab",
                parallax: { enable: true, force: 60, smooth: 10 },
              },
              resize: { delay: 0.5, enable: true },
            },
            modes: {
              trail: { delay: 1, pauseOnStop: false, quantity: 1 },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: { distance: 200 },
              bubble: {
                distance: 400,
                duration: 2,
                mix: false,
                opacity: 0.8,
                size: 10,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  mix: false,
                  selectors: [],
                },
              },
              connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
              grab: {
                distance: 400,
                links: { blink: false, consent: false, opacity: 1 },
              },
              push: { default: true, groups: [], quantity: 4 },
              remove: { quantity: 2 },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: { factor: 3, radius: 200 },
              light: {
                area: {
                  gradient: {
                    start: { value: "#ffffff" },
                    stop: { value: "#000000" },
                  },
                  radius: 1000,
                },
                shadow: { color: { value: "#000000" }, length: 2000 },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: { vertical: { value: 1 } },
            collisions: {
              absorb: { speed: 2 },
              bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: { enable: true, retries: 0 },
            },
            color: {
              value: "#ffffff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                s: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
                l: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: true,
                  offset: 0,
                },
              },
            },
            effect: { close: true, fill: true, options: {}, type: [] },
            groups: {},
            move: {
              angle: { offset: 0, value: 90 },
              attract: {
                distance: 200,
                enable: false,
                rotate: { x: 3000, y: 3000 },
              },
              center: { x: 50, y: 50, mode: "percent", radius: 0 },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: { value: 0 },
                enable: false,
                options: {},
              },
              outModes: { default: "out" },
              random: false,
              size: false,
              speed: 2,
              spin: { acceleration: 0, enable: false },
              straight: false,
              trail: { enable: false, length: 10, fill: {} },
              vibrate: false,
              warp: false,
            },
            number: {
              density: { enable: true, width: 1920, height: 1080 },
              limit: { mode: "delete", value: 0 },
              value: 100,
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: {
                count: 0,
                enable: true,
                speed: 3,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: { value: "#000" },
              enable: false,
              offset: { x: 0, y: 0 },
            },
            shape: { close: true, fill: true, options: {}, type: "circle" },
            size: {
              value: { min: 1, max: 10 },
              animation: {
                count: 0,
                enable: true,
                speed: 20,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: { width: 0 },
            zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: { value: 3 },
                rate: { value: { min: 4, max: 9 } },
                sizeOffset: true,
              },
            },
            roll: {
              darken: { enable: false, value: 0 },
              enable: false,
              enlighten: { enable: false, value: 0 },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              value: 0,
              animation: { enable: true, speed: 0, decay: 0, sync: false },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: { enable: false, frequency: 0.05, opacity: 1 },
              particles: { enable: false, frequency: 0.05, opacity: 1 },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: { angle: 50, move: 10 },
            },
            life: {
              count: 0,
              delay: { value: 0, sync: false },
              duration: { value: 0, sync: false },
            },
            rotate: {
              value: 0,
              animation: { enable: false, speed: 0, decay: 0, sync: false },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: { value: 45 },
              width: 1,
            },
            links: {
              blink: false,
              color: { value: isDarkTheme ? "#fff" : "#000" },
              consent: false,
              distance: 150,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: { blur: 5, color: { value: "#000" }, enable: false },
              triangles: { enable: false, frequency: 1 },
              width: 1,
              warp: false,
            },
            repulse: {
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          name: "Parallax",
          motion: { disable: false, reduce: { factor: 4, value: true } },
        }}
      />

      {/* -------------- BANNER -------------- */}
      <div className="container">
        <div className="row homeTop">
          <div className="col-lg-8 col-md-12 col-sm-12 lg-text-center">
            <h4
              className="homeHead"
              style={{ color: isDarkTheme ? "white" : "black" }}
            >
              Unlock the Power to
              <span style={{ color: "#F11900", fontWeight: "700" }}>
                {" "}
                Drive
              </span>{" "}
              Business Leads with Cost-Effective Strategies!
            </h4>
            <p
              className="homeHeadText"
              style={{ color: isDarkTheme ? "white" : "black" }}
            >
              The{" "}
              <span style={{ color: "#F11900", fontWeight: "300" }}>
                IT-Experts
              </span>{" "}
              crew focuses on reworking capability leads into conversions and
              facilitating on-line commercial enterprise fulfillment thru
              time-examined strategies.{" "}
            </p>
            {/* <button className="getbutton">Get Quote</button> */}
          </div>
        </div>
      </div>

      <div className="container px-sm-10" style={{ marginBottom: "6rem" }}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div data-aos="fade-up" data-aos-duration={2000}>
              <img
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Development_person_IT_EXPERTS.png?v=1704103951"
                className="personimg img-thumbnail"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
            <h4
              className="choose"
              style={{ color: isDarkTheme ? "white" : "dimgray" }}
            >
              What sets{" "}
              <span style={{ color: "#F11900", fontWeight: "700" }}>
                IT professionals apart from others?
              </span>
            </h4>
            {/* <br /> */}
            <p
              className="wehelp pt-2"
              style={{ color: isDarkTheme ? "white" : "dimgray" }}
            >
              Work with our experts to find comprehensive, state-of-the-art
              solutions to your technical challenges.
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-6">
                <img
                  src="images/Dollar Sign.png"
                  className="dollarimg"
                  alt="Dollar"
                />
                <h4
                  className="cost"
                  style={{ color: isDarkTheme ? "white" : "dimgray" }}
                >
                  {" "}
                  Budget-Friendly{" "}
                </h4>
                <p
                  className=""
                  style={{
                    color: isDarkTheme ? "white" : "dimgray",
                    fontSize: "1.1rem",
                  }}
                >
                  We guarantee top-notch services without breaking the bank. Our
                  customized strategies are designed to provide you with
                  significant ROI
                </p>
                <img src="images/car.png" className="carimg pt-2" alt="" />
                <h4
                  className="cost"
                  style={{ color: isDarkTheme ? "white" : "dimgray" }}
                >
                  Rapid Delivery
                </h4>
                <p
                  style={{
                    color: isDarkTheme ? "white" : "dimgray",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                  }}
                >
                  Ensuring timely delivery of solutions is extremely important
                  to us, giving you constant peace of mind throughout our
                  collaboration.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img
                  src="images/Settings.png"
                  className="settingimg"
                  alt="Settings"
                />
                <h4
                  className="cost"
                  style={{ color: isDarkTheme ? "white" : "dimgray" }}
                >
                  Top-notch Quality
                </h4>
                <p
                  style={{
                    color: isDarkTheme ? "white" : "dimgray",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                  }}
                >
                  IT experts ensure quality service delivery without
                  compromising excellence. Each service undergoes rigorous
                  testing to ensure optimal results.
                </p>
                <img src="images/Brain.png" className="brainimg" alt="" />
                <h4
                  className="cost"
                  style={{ color: isDarkTheme ? "white" : "dimgray" }}
                >
                  Ease of Mind
                </h4>
                <p
                  style={{
                    color: isDarkTheme ? "white" : "dimgray",
                    fontWeight: 400,
                    fontSize: "1.1rem",
                  }}
                >
                  IT experts team takes the burden off your shoulders, allowing
                  you to focus on other important things in your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1
          className="services"
          style={{ color: isDarkTheme ? "white" : "#252525" }}
        >
          Services we Offer
        </h1>
        <p
          className="helpclient pt-3 pb-5 mb-2"
          style={{ color: isDarkTheme ? "white" : "black" }}
        >
          We assist in addressing client issues, fostering business growth, and
          connecting your business with the right audience
        </p>
        <div>
          <div className="row sixdivs">
            <div
              className="col-lg-2 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-handshake aa" />

              <p className="ll">IT Consultant</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3 "
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-code aa" />
              <p className="ll">Website Development</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-database aa" />
              <p className="ll">Data Storage Management</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-bug-slash aa" />
              <p className="ll">Fix Bugs &amp; Error</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-brands fa-uncharted aa" />
              <p className="ll">Software Development</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-brands fa-connectdevelop aa" />
              <p className="ll">App Development</p>
            </div>
          </div>
          <div className="row fourdivs">
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-video aa" />
              <p className="ll">Video Editing</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-bullhorn aa" />
              <p className="ll">SEO</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-user aa" />
              <p className="ll">SMM</p>
            </div>
            <div
              className="col-lg-2 col-md-4 col-sm-6 ITConsultant pt-3"
              style={{
                backgroundColor: isDarkTheme ? "#000" : "rgb(250, 248, 248)",
                color: isDarkTheme ? "white" : "black",
              }}
            >
              <i className="fa-solid fa-chart-simple aa" />
              <p className="ll">Graphic Designing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container  px-sm-10 my-5 py-3">
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

      <div className="container counting my-3 py-3 ">
        <div className="row delivrysofar">
          <div className="deliverd mb-3 col-lg-5 col-md-6 col-sm-12">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="picc"
            >
              <img
                src="images/Bottom.png"
                className="delimg img-thumbnail"
                alt="Delivered"
                id="picc"
                style={{ backgroundColor: "transparent" }}
              />
              <p className="sofar">
                Delivered{" "}
                <span style={{ color: "#F11900", fontWeight: "700" }}>
                  {" "}
                  <br /> So Far
                </span>
              </p>
            </div>
          </div>

          <div className="hpyclint mt-3 col-lg-7 col-md-6 col-sm-12">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="scrol"
            >
              <span className="happy fs-4"> Happy Clients </span>
              <p
                ref={text1Ref}
                className="five"
                style={{
                  color: isDarkTheme ? "white" : "grey",
                  marginTop: ".8rem",
                }}
              >
                {" "}
                0{" "}
              </p>

              <span className="project justify-content-center fs-4">
                {" "}
                Projects Completed{" "}
              </span>
              <p
                ref={text2Ref}
                className="two"
                style={{
                  color: isDarkTheme ? "white" : "grey",
                  marginTop: ".8rem",
                }}
              >
                {" "}
                0{" "}
              </p>

              <span className="supplie fs-4"> Suppliers with Us </span>
              <p
                ref={text3Ref}
                className="three"
                style={{
                  color: isDarkTheme ? "white" : "grey",
                  marginTop: ".8rem",
                }}
              >
                {" "}
                0{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Home;
