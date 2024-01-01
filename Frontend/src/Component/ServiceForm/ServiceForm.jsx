import React from 'react'
import './ServiceForm.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useTheme } from '../../Theme/ThemeContext';
const ServiceForm = () => {
    const {isDarkTheme} = useTheme()
    const notify = (type) => {
        toast("Submission Successful", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isDarkTheme ? "dark" : "light",
          type: type || "success", // Use the provided type or default to 'success'
        });
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
    
            // Display success notification
            notify();
    
            // Reset the form and set submitting to false
            resetForm();
            setSubmitting(false);
          } catch (error) {
            // Handle submission error
            console.error("Submission error:", error);
    
            // Display error notification if needed
            toast.error("Submission failed. Please try again.", {
              theme: isDarkTheme ? "dark" : "light",
              type: "error",
            });
    
            // Reset submitting state
            setSubmitting(false);
          }
        },
      });
  return (

         
             
                  <form className="mb-5">
                    <div className="row my-2">  
                    <div className="col-md-4">
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

                    <div className="col-md-4 ">
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
                    </div>
                    <div className="row my-2">  
                    <div className="col-md-4 ">
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
                    <div className="col-md-4">
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
                        pattern="\d{3}-\d{3}-\d{4-2}"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <div className="invalid-feedback">
                          {formik.errors.phone}
                        </div>
                      )}
                    </div>
                    </div>
                    <div className="row my-2">  
                    <div className="col-md-4 col-lg-8">
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
                    </div>

                    <div className="col-lg-8 d-flex justify-content-center my-2">
                  
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
               
       
       
  )
}

export default ServiceForm