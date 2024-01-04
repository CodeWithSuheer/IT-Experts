import React, { useState } from "react";
import signup_img from "../../../public/images/Sign_Up_Img.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginuserAsync } from "../../features/authSlice";
import { toast } from "react-toastify";
import { useTheme } from "../../Theme/ThemeContext";
import { FaEye } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isDarkTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(
          loginuserAsync({
            username: values.username,
            password: values.password,
          })
        );
        if (response.payload.token) {
          console.log("login response", response);
          navigate("/admindashboard");
        } else {
          toast.error("Invalid Credentials");
        }
      } catch (error) {
        console.error("Login failed", error);
        toast.error("Invalid Credentials");
      }
    },
  });

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          paddingTop: "3rem",
          backgroundColor: isDarkTheme ? "#242435" : "white",
        }}
      >
        <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div
                  className="card-body p-0"
                  style={{
                    backgroundColor: isDarkTheme ? "#242435" : "white",
                  }}
                >
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="mb-4">
                          <h3
                            className="signup_heading h4 "
                            style={{
                              color: isDarkTheme ? "white" : "#252525",
                            }}
                          >
                            Sign Up
                          </h3>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                          <div className="form-group">
                            <label
                              htmlFor="username"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              User Name
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className={`form-control ${formik.errors.username ? "is-invalid" : ""
                                }`}
                              value={formik.values.username}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.username && formik.errors.username && (
                              <div className="invalid-feedback">
                                {formik.errors.username}
                              </div>
                            )}
                          </div>

                          <div className="form-group">
                            <label
                              htmlFor="email"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className={`form-control ${formik.errors.email ? "is-invalid" : ""
                                }`}
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              required
                            />
                            {formik.touched.email && formik.errors.email && (
                              <div className="invalid-feedback">
                                {formik.errors.email}
                              </div>
                            )}
                          </div>

                          <div className="mb-1">
                            <label
                              htmlFor="password"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Password
                            </label>
                            <div className="input-group">
                              <input
                                type={
                                  showPassword ? "text" : "password"
                                }
                                className={`form-control form-control-inputs password_field ${formik.errors.password ? "is-invalid" : ""
                                  }`}
                                id="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                autoComplete="password"
                                required
                              />
                              <div className="input-group-append eye_box">
                                <span
                                  className="input-group-text"
                                  onClick={togglePasswordVisibility}
                                  style={{ cursor: "pointer" }}
                                >
                                  {showPassword ? (
                                    <FaEye />
                                  ) : (
                                    <AiOutlineEyeInvisible />
                                  )}
                                </span>
                              </div>
                            </div>
                            {formik.touched.password &&
                              formik.errors.password && (
                                <div className="invalid-feedback">
                                  {formik.errors.password}
                                </div>
                              )}
                          </div>

                          <div className="mb-1">
                            <label
                              htmlFor="confirmPassword"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Confirm Password
                            </label>
                            <div className="input-group">
                              <input
                                type={
                                  showConfirmPassword ? "text" : "password"
                                }
                                className={`form-control form-control-inputs password_field ${formik.errors.confirmPassword ? "is-invalid" : ""
                                  }`}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                autoComplete="password"
                                required
                              />
                              <div className="input-group-append eye_box">
                                <span
                                  className="input-group-text"
                                  onClick={toggleConfirmPasswordVisibility}
                                  style={{ cursor: "pointer" }}
                                >
                                  {showConfirmPassword ? (
                                    <FaEye />
                                  ) : (
                                    <AiOutlineEyeInvisible />
                                  )}
                                </span>
                              </div>
                            </div>
                            {formik.touched.confirmPassword &&
                              formik.errors.confirmPassword && (
                                <div className="invalid-feedback">
                                  {formik.errors.confirmPassword}
                                </div>
                              )}
                          </div>

                          <div>
                            <p
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Already Have Account?{" "}
                              <Link
                                to="/login"
                                style={{
                                  color: "red",
                                  textDecoration: "underline",
                                }}
                              >
                                Login
                              </Link>
                            </p>
                          </div>

                          <div className="action_buttons">
                            <button type="submit" className="signup_btn">
                              Sign Up
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <img src={signup_img} alt="" className="signup_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
