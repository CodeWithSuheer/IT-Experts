import React, { useState } from "react";
import login_img from "../../../public/images/login_img.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginuserAsync } from "../../features/authSlice";
import { toast } from "react-toastify";
import { useTheme } from "../../Theme/ThemeContext";
import { FaEye } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isDarkTheme } = useTheme();

  // TOGGLE PASSWORD VISIBILITY
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        loginuserAsync({ username, password })
      ).then((response) => {
        if (response.payload.token) {
          console.log("login response", response);
          navigate("/admindashboard");
        } else {
          toast.error("Invalid Credientials");
        }
      });
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Invalid Credientials");
    }
  };

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          paddingTop: "3rem",
          backgroundColor: isDarkTheme ? "#242435" : "white",
        }}
      >
        <div id="main-wrapper" class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="card border-0">
                <div
                  class="card-body p-0"
                  style={{ backgroundColor: isDarkTheme ? "#242435" : "white" }}
                >
                  <div class="row no-gutters">
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="mb-5">
                          <h3
                            class="login_heading h4 "
                            style={{ color: isDarkTheme ? "white" : "#252525" }}
                          >
                            Admin Login
                          </h3>
                        </div>

                        <h6
                          class="h5 mb-0"
                          style={{ color: isDarkTheme ? "white" : "#252525" }}
                        >
                          Welcome back!
                        </h6>
                        <p
                          class="mt-2 mb-5"
                          style={{ color: isDarkTheme ? "white" : "#252525" }}
                        >
                          Enter your email address and password to access admin
                          dashboard.
                        </p>

                        {/* ----------- LOGIN -----------  */}
                        <form onSubmit={handleLogin}>
                          <div class="form-group">
                            <label
                              for="exampleInputEmail1"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              User Name
                            </label>
                            <input
                              type="name"
                              class="form-control"
                              id="exampleInputEmail1"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                            />
                          </div>
                          {/* <div class="form-group mt-3 mb-4">
                            <label
                              for="exampleInputPassword1"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Password
                            </label>
                            <input
                              type={showPassword ? "text" : "password"}
                              class="form-control"
                              id="exampleInputPassword1"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <div className="input-group-append">
                              <span
                                className="input-group-text"
                                onClick={togglePasswordVisibility}
                                style={{ cursor: "pointer" }}
                              >
                                {showPassword ? (
                                  <i className="far fa-eye"></i>
                                ) : (
                                  <i className="far fa-eye-slash"></i>
                                )}
                              </span>
                            </div>
                          </div> */}
                          <div className="mb-3">
                            <label
                              for="exampleInputPassword1"
                              style={{
                                color: isDarkTheme ? "white" : "#252525",
                              }}
                            >
                              Password
                            </label>
                            <div className="input-group">
                              <input
                                type={showPassword ? "text" : "password"}
                                className="form-control form-control-inputs password_field"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                          </div>

                          <div className="action_buttons">
                            <button type="submit" class="login_btn">
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="col-lg-6 d-none d-lg-inline-block">
                      <img src={login_img} alt="" className="login_img" />
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
