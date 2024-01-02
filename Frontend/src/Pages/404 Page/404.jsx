import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../Theme/ThemeContext'
const NotFound = () => {
  const {isDarkTheme} = useTheme()
  return (
    <section className="page_404"  style={{backgroundColor:isDarkTheme?'#242435':"white"}}>
    <div className="container">
      <div className="row justify-content-center align-items-center ">
      
          <div className="col-sm-12 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>
            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>
              <p>the page you are looking for not avaible!</p>
              <Link to="/" className="link_404">
                Go to Home
              </Link>
            </div>
          </div>
      
      </div>
    </div>
  </section>
  
  )
}

export default NotFound