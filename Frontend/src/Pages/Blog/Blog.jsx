import React from 'react'
import './Blog.css'
import { useTheme } from '../../Theme/ThemeContext'
import Scroll from '../../Component/ScrolltoTap/Scroll'
import { Helmet } from 'react-helmet'
const Blog = () => {
  const { isDarkTheme } = useTheme()
  return (
    <>
      <div style={{ backgroundColor: isDarkTheme ? '#242435' : "#fff", color: isDarkTheme ? 'white' : 'gray', paddingBottom: "40px" }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>It Experts | Blog </title>
        </Helmet>

        <div className="Explorers">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-center">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <h4 className="explorers">Explorer's Document</h4>
                <p className="excreat text-center">
                  Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user

                </p>
                <p>
                  {/* <button className="exbutton">Get Quote</button> */}
                </p>
              </div>
              <div className="col-lg-8" />
            </div>
          </div>
        </div>

        {/* //Header End// */}

        <div className="container">
          <div className="row placediv col-lg-11 ms-lg-5">
            <p className="places" style={{ color: isDarkTheme ? "white" : 'gray' }}>Places to Explorer </p>
            <p className="plcreat" style={{ color: isDarkTheme ? "white" : 'gray' }}>
              Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user experience Creating a very beautiful website design accordance with the fundamental user

            </p>
          </div>
        </div>

        <div className="row beachrow1 col-lg-10">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
        > */}

            <img src="/images/Beach.jpg" className="beachimg1" alt="" />

          </div>
          {/* </div> */}
          <div className="col-lg-5 col-md-6 col-sm-12 beachtext">
            <h4 className="beach">
              Beach

            </h4>
            <p className="becreat">
              If you want to connect with your customers in 2023, it’s high time that
              you harness the power of social media. Social platforms these days are
              becoming the hub. Everyone first looks at a business’s online presence,
              its reviews, and how it does on the internet. That’s where you need to
              understand the power of social media marketing to help unlock your
              business’s ultimate potential.
            </p>
          </div>
        </div>

        <div className="row beachrow2 col-lg-10">
          <div className="col-lg-5 col-md-6 col-sm-12 beachtext2">
            <h4 className="beach">
              Beach
            </h4>
            <p className="becreat">
              Graphic designing is the art of communication through visuals that
              enable businesses to get their message across visually. It’s something
              that engages the target audience, captures their attention, and leaves a
              lasting impression. This aspect is incredibly important as it allows
              businesses to create a memorable identity and make a mark amidst the
              fierce competition.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <div
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
        > */}

            <img src="images/Beach2.jpg" className="beachimg2" alt="" />

          </div>
          {/* </div> */}
        </div>

        <div className="row beachrow3 col-lg-10 ">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {/* <div
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration={2000}
        > */}

            <img src="images/IMAGE_23.png" className="beachimg3" alt="" />

          </div>
          {/* </div> */}
          <div className="col-lg-5 col-md-6 col-sm-12 beachtext">
            <h4 className="beach">Beach</h4>
            <p className="becreat">
              If you own a business, you know how important digital marketing is for
              your website. A huge part of this umbrella term is SEO Search Engine
              Optimization. SEO is the backbone of your website’s ranking. It
              determines how well your website will rank and how many visitors may
              click on it.
            </p>
          </div>
        </div>
        <Scroll />
      </div>
    </>

  )
}

export default Blog