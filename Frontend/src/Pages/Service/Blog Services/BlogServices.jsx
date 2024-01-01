import React from 'react'
import ServiceForm from '../../../Component/ServiceForm/ServiceForm'
import './BlogService.css'
import { useParams } from 'react-router-dom'
import reactLogo from "../../../../public/images/reactLogo.png";
import wordpressLogo from "../../../../public/images/wordpressLogo.png";
import html_css_js from "../../../../public/images/html_css_js.png";
import custom from "../../../../public/images/custom.png";
const BlogServices = () => {
    const { id } = useParams();
    const softwareData = [
        {
          id: 1,
          logo: reactLogo,
          name: "MERN",
          image:'https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1',
          description:
            "Our process begins with the creation of a software prototype, which ensures a flawless final product.",
        },
        {
          id: 2,
          logo: wordpressLogo,
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpBihIigEBjF6ThHqSiDpw1tjcCSPW1ZI7g6f23F0zw&s',

          name: "Wordpress",
          description:
            "The inclusion of cybersecurity measures is an integral part of the software's protection of all data from possible malicious attacks.",
        },
        {
          id: 3,
          logo: html_css_js,
          image:'https://images.tynker.com/blog/wp-content/uploads/20190226100225/02-25-2018-html-css-announcement-blog.png     ',

          name: "HTML CSS JS",

          description:
            "We constantly test both the software and its code to reduce risks and quickly identify potential bugs.",
        },
        {
          id: 4,
          logo: custom,
          image:'https://beaccessible.com/wp-content/uploads/2022/07/blog_html-min.jpg',

          name: "Custom",
          description:
            "Our software websites prioritize optimal results and comprehensive features to ensure a complete user experience.",
        },
      ];
      const data = softwareData.find((data)=> data.id == id)
  return (
  
<div className="container pb50 mt-4">
  <div className="row">
    <div className="col-md-9 mt-20 ">
      <article>
        <img
          src={data?.image}
          alt=""
          className="img-fluid 
          "
        />
        <div className="post-content">
          <h3 className='my-4 text-center fs-1'>{data?.name}</h3>

          <h3>A smart template that works 24/7 for your company</h3>
         
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo,{" "}
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo,{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo,{" "}
          </p>
          <ul className="list-inline share-buttons">
            <li className="list-inline-item">Share Post:</li>
            <li className="list-inline-item">
              <a
                href="#"
                className="social-icon-sm si-dark si-colored-facebook si-gray-round"
              >
                <i className="fa fa-facebook" />
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="social-icon-sm si-dark si-colored-twitter si-gray-round"
              >
                <i className="fa fa-twitter" />
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="#"
                className="social-icon-sm si-dark si-colored-linkedin si-gray-round"
              >
                <i className="fa fa-linkedin" />
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
          <hr className="mb40" />
       
     
        
          <h4 className="mb40 text-uppercase font500">Ask Your Query</h4>
       
        </div>
      </article>
      {/* post article*/}
    </div>
    
  </div>
  <ServiceForm/>
</div>



  )
}

export default BlogServices