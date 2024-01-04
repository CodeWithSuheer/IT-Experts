import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import NotFound from "./Pages/404 Page/404";
import GraphicDesign from "./Pages/Service/Graphic Designing/Graphic";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Conatct from "./Pages/Contact/Conatct";
import Web from "./Pages/Service/WebSite Development/Web";
import Software from "./Pages/Service/Software Development/Software";
import It from "./Pages/Service/IT Expert Specialist/It";
import Ui from "./Pages/Service/UI UX Graphic Creative Graphic/Ui";
import Smm from "./Pages/Service/SMM Panel/Smm";
import Seo from "./Pages/Service/Search Engine Optimization/Seo";
import AdminLogin from "./Pages/Login/AdminLogin";
import SignUp from "./Pages/SignUp/SignUp";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import { store } from "./app/Store";
import { Provider } from "react-redux";
import Portfolio from "./Pages/Portfolio/Portfolio";
import WebServices from "./Pages/Service/WebSite Development/Web Services/Services";
import GraphicService from "./Pages/Service/Graphic Designing/Graphic Services/GraphicService";
import BlogServices from "./Pages/Service/Blog Services/BlogServices";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermConditions from "./Pages/TermConditions/TermConditions";


// Configure NProgress
// NProgress.configure({ showSpinner: false });



const router = createBrowserRouter([
  
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Blog", element: <Blog /> },
      { path: "/Contact", element: <Conatct /> },
      { path: "/Web", element: <Web /> },
      { path: "/Software", element: <Software /> },
      { path: "/App", element: <It /> },
      { path: "/Ui", element: <Ui /> },
      { path: "/Graphic", element: <GraphicDesign /> },
      { path: "/Smm", element: <Smm /> },
      { path: "/Seo", element: <Seo /> },
      { path: "/login", element: <AdminLogin /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/admindashboard", element: <AdminDashboard /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/WebServices", element: <WebServices /> },
      { path: "/WebServicesBlog/:id", element: <BlogServices /> },
      { path: "/GraphicService", element: <GraphicService /> },
      { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "/TermConditions", element: <TermConditions /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// const LazyLoad = () => {
//   useEffect(() => {
//     NProgress.start();

//     return () => {
//       NProgress.done();
//     };
//   }, []);

//   return '';
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
