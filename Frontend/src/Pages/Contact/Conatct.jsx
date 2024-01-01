import React from "react";
import "./Contact.css";
import { useTheme } from "../../Theme/ThemeContext";
import Scroll from "../../Component/ScrolltoTap/Scroll";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import axios from "axios";
import { allFormDataAsync } from "../../features/dataSlice";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

const Contact = () => {
  const { isDarkTheme } = useTheme();
  const dispatch = useDispatch();

  const generateReferenceNumber = () => {
    const prefix = "ITE-";
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${randomDigits}`;
  };


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("First Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      company: Yup.string().required("Company Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Contact Number must only contain digits") // Only allow digits
        .min(10, "Contact Number must be at least 10 digits") // Minimum length of 10 digits
        .required("Contact Number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Make an Axios request to your server
        const refNumber = generateReferenceNumber();
          values.refNumber = refNumber;
        console.log("values", values);
        const response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        dispatch(allFormDataAsync());

        console.log("Server Response:", response);

     
        Swal.fire({
          title: "Submission Successful",
          text: "Your request has been submitted successfully.Please check your email Your Referce Number is ${refNumber}",
icon:"success",
animation:"true ",
showClass: {
  popup: `
    animate__animated
     animate__fadeInUpBig
    animate__faster
  `
},
hideClass: {
  popup: `
    animate__animated
    animate__fadeOutDown
    animate__faster
  `
}

       
        });

        // Reset the form and set submitting to false
        resetForm();
        setSubmitting(false);
      } catch (error) {
        // Handle submission error
        console.error("Submission error:", error);

        // Display error notification if needed
    
        Swal.fire({
          title: "Submission Failed",
          icon:"error",
          animation:'true',
          showClass: {
            popup: `
              animate__animated
               animate__fadeInUpBig
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        
     
       
          
        });

        // Reset submitting state
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div
        style={{
          backgroundColor: isDarkTheme ? "#242435" : "rgb(250, 248, 248)",
          color: isDarkTheme ? "white" : "black",
          paddingBottom: "30px",
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>It Experts | Contact </title>
        </Helmet>
        <div className="container">
          <div className="contact">
            <div className="row contactrow">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h4 className="talkabout mt-3">
                  <span style={{ color: "#F11900" }}>Let’s Talk</span> About:
                </h4>
                <p className="nproject">New Project</p>
                <p className="joining">Joining Our Team</p>
                <p className="general">General Inquiries</p>
              </div>
              <div className="col-lg-6 ">
                <section className="get-in-touch">
                  <h4 className="title">Get in touch</h4>
                  <form className="row g-4 mt-2">
                    <div className="col-md-6">
                      <input
                      style={{color:isDarkTheme?'black':null}}
                        type="text"
                        className={`form-control form-control-lg ${
                          formik.touched.name && formik.errors.name
                            ? "is-invalid"
                            : ""
                        }`}
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="First Name"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <input
                      style={{color:isDarkTheme?'black':null}}
                        type="email"
                        className={`form-control form-control-lg ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                       style={{color:isDarkTheme?'black':null}}
                        type="text"
                        className={`form-control form-control-lg ${
                          formik.touched.company && formik.errors.company
                            ? "is-invalid"
                            : ""
                        }`}
                        id="company"
                        name="company"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.company}
                        placeholder="Company Name"
                      />
                      {formik.touched.company && formik.errors.company && (
                        <div className="invalid-feedback">
                          {formik.errors.company}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <input
                 
                        type="tel"
                        style={{color:isDarkTheme?'black':null}}
                        className={`form-control form-control-lg ${
                          formik.touched.phone && formik.errors.phone
                            ? "is-invalid"
                            : ""
                        }`}
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder="Phone Number"
                        pattern="\d{3}-\d{3}-\d{4}"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="invalid-feedback">
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-lg-12">
                      <textarea
                        type="text"
                        style={{color:isDarkTheme?'black':null}}
                        className={`form-control form-control-lg ${
                          formik.touched.message && formik.errors.message
                            ? "is-invalid"
                            : ""
                        }`}
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder="Message"
                        rows={4}
                      />
                      {formik.touched.message && formik.errors.message && (
                        <div className="invalid-feedback">
                          {formik.errors.message}
                        </div>
                      )}
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      {/* <button
                        type="submit"
                        className="default-btn"
                        onClick={formik.handleSubmit}
                      >
                        Submit form
                      </button> */}
                      <button
                        type="submit"
                        onClick={formik.handleSubmit}
                        className="submit_button"
                      >
                        {" "}
                        Submit form
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>

          <div className="row mapdiv " id="map">
            <iframe
              className="mapimg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1201.7822313516697!2d74.37838584379904!3d31.574839316034716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191aca1c1e14c3%3A0x8a9d60a5ca095c02!2sIT-Experts!5e0!3m2!1sen!2s!4v1693458483728!5m2!1sen!2s"
              width={600}
              height={450}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                filter: isDarkTheme ? "invert(1)" : "invert(0)",
                border: 0,
              }} // Apply dark theme to map
            />
          </div>
        </div>

        <Scroll />
      </div>
    </>
  );
};

export default Contact;
