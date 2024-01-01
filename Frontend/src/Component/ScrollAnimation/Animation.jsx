import React from "react";
import { useTheme } from "../../Theme/ThemeContext";
import Marquee from 'react-fast-marquee';

export default function Animation() {
  const { isDarkTheme } = useTheme();
  const baseVelocity = 50; // Set your baseVelocity value
 
  const directionLeft = "left";
  const directionRight = "right";
  const gradient = !isDarkTheme;
  return (
    <div className='py-5'>
      <Marquee
        speed={baseVelocity}
        gradient={gradient}
        direction={directionLeft}
        style={{ color: isDarkTheme ? 'white' : 'black', display: 'flex' }}
      >
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
      </Marquee>

      {/* Remove the following Marquee block if you want to remove the second span */}
      <Marquee
        speed={baseVelocity}
        gradient={gradient}
        direction={directionRight}
        style={{ color: isDarkTheme ? 'white' : 'black', display: 'flex' }}
      >
      <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:'red' }}>IT Experts</h2>
        <h2 style={{ marginRight: '30px', fontFamily: "Plaster, sans-serif", fontSize: '2.8rem',color:"black" }}>Digital Agency</h2>
      </Marquee>
    </div>
  );
}
