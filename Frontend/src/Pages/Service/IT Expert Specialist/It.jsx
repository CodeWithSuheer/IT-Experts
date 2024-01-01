import React from 'react'
import './it.css'
import { useTheme } from '../../../Theme/ThemeContext'
import Scroll from '../../../Component/ScrolltoTap/Scroll'
import { Helmet } from 'react-helmet'

const It = () => {

  const { isDarkTheme } = useTheme()
  return (
    <div style={{ backgroundColor: isDarkTheme ? '#242435' : "#fff", color: isDarkTheme ? 'white' : 'black', paddingBottom: 40 }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>It Experts |  App Development </title>
      </Helmet>
      <div className="ITSpecialist">

        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-md-12 col-sm-12 app_dev_top">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={2000}
              >
                <h4 className="itspecialist text-center">
                  App  Development
                </h4>
                <p className="specialtext text-center">
                  Empower your tasks with contemporary technology! Our IT specialists craft
                  tailor-made and inclusive apps the use of the ultra-modern libraries and tech
                  to satisfy your specific needs.
                </p>
                <p>
                  {/* <button className="specialbutton">Get Quote</button> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Header End// */}
      <div className="container" style={{ maxWidth: '90%', marginInline: 'auto' }}>
        <div className="row imgspecial">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/developer.png" className="itsimg" alt="" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/Developer1.png" className="itsimg" alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              {/* <div style="width: 100%; height: 155px; background-color: lightgray;"></div> */}
              <img src="images/ITSimg.png" className="itsimg" alt="" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/ITSimg.png" className="itsimg" alt="" />
            </div>
          </div>
          {/* <div class="col-lg-2 col-md-2"></div> */}
          <div className="offset-lg-2 col-lg-4 offset-md-2 col-md-4 col-sm-12 Exspecial_cont">
            <h4 className="Exspecial">
              Get Tailored<span style={{ color:isDarkTheme?'white':"rgb(91, 91, 91)" }}> Services</span>
            </h4>
            <p className="Exspecialtext" style={{ color: isDarkTheme ? 'white' : ' rgb(97, 96, 96' }}>
              Collaborate closely with our engineers for exceptional arrangements and
              cohesive app advancement custom fitted to your needs.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row webmobile">
          <div className="col-lg-6 col-md-6 col-sm-12" style={{ margin: "auto" }}>
            <h4 className="specialweb" style={{ color: isDarkTheme ? 'white' : 'rgb(97, 96, 96)' }}>
              App  Development
            </h4>
            <p className="specialwebtext" style={{color:isDarkTheme?'white':'rgb(63, 63, 63)'}}>
              Our team of experts creates apps that deliver results. A user-friendly and
              aesthetically pleasing design that resonates with your target audience is
              preferred. Starting with careful design and testing, we roll out the app when
              it's perfect. Our dedicated app developers are committed to fixing all bugs
              to ensure smooth operation.
            </p>
          </div>
          <div className="offset-lg-2 col-lg-4 offset-md-2 col-md-4 col-sm-12">
            <div
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={3000}
            >
              <img src="images/mOBIILLLE.png" className="imgmobile" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Apps ----------  */}
      <div className="container my-5 py-5">
        <div className="row">
          <h4 className="solveprob" style={{ color: isDarkTheme ? 'white' : 'rgb(97, 96, 96)' }}>
            We Develop Mobile  Apps
          </h4>
          <p className="solvetext" style={{color:isDarkTheme?"white":"rgb(63, 63, 63)"}}>
            Our main goal is to create a user-friendly mobile application that is consistent
            with design principles. Using the latest libraries and tools, we develop error free applications. We answer questions and create an application that creates a meaningful connection between your program and the target audience.

          </p>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* <img src="images/ITSimg.png" class="itsimg" alt=""> */}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src="images/ITSimg.png" className="itsimg" alt="" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* <img src="images/ITSimg.png" class="itsimg" alt=""> */}
          </div>
          <p className="solvetext mt-3">
            We tend to our queries and develop an app that connects your app to the
            target audience.
          </p>
        </div>
      </div>


      {/* ---------- IT-ExpertSpecialist ----------  */}
      <div className="container pb-5" style={{ maxWidth: '85%', marginInline: 'auto' }}>
        <div className="row" style={{ marginBlock: '4rem' }}>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/network.png" className="appLastImg1" alt="" />
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

          <div className="col-lg-2 col-md-6 col-sm-12 mt-sm-0"
            style={{ paddingBottom: 30 }}
          >
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration={2000}
            >
              <img src="images/graph.png" className="appLastImg3" alt="" />
            </div>
          </div>

          {/* <div class="col-lg-2"></div> */}
          <div className="offset-xl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12"
            style={{ margin: "auto", padding: 2 }}
          >
            <h4 className="specialist" style={{ color: isDarkTheme ? 'white' : 'black', lineHeight:'1.2',fontWeight:'600',fontSize:'3.5rem' }}>
              <span style={{ color: "#F11900" }} >IT-Expert </span>
              Specialist
            </h4>
            <p className="itspecialtext">
              Drive your online growth with our mission: to create comprehensive IT
              solutions that appeal to the ideal audience to grow your digital success.
            </p>
            {/* <button className="itspecialbutton">Get Quote</button> */}
          </div>
        </div>
      </div>
      <Scroll />
    </div>

  )
}

export default It