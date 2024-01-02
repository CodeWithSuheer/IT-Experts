import React from "react";
import "./PrivacyPolicy.css";
import { useTheme } from "../../Theme/ThemeContext";
const PrivacyPolicy = () => {
  const {isDarkTheme} = useTheme()
  return (
    <>
      <section className="policy" style={{ minHeight: "100vh",backgroundColor:isDarkTheme?'#242435':'white',color:isDarkTheme?'white':'#252525' }}>
        <div className="container">
          <h1 className="policy_content_heading">Privacy Policy</h1>

          <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>

          {/* ------------------ FIRST CONTENT BOX ------------------ */}
          <div className="policy_content">
            <h4 className="policy_content_title">First Heading</h4>
            <p className="policy_content_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quia ad deleniti esse illo debitis nam molestiae
              corporis suscipit laudantium iure fugiat quod quam iste, maxime ex
              ipsum atque illum accusantium sint est vel. Optio, labore!
              Eligendi neque ut ab. Minus, quaerat. Perspiciatis hic adipisci
              tenetur labore iure voluptates magnam deserunt, consequatur nam
              magni saepe exercitationem debitis facilis similique id molestiae
              pariatur consectetur, quod sapiente, rem laudantium? Culpa totam
              debitis, fuga aliquid ex non similique.
            </p>
          </div>

          {/* ------------------ FIRST CONTENT BOX ------------------ */}
          <div className="policy_content">
            <h4 className="policy_content_title">First Heading</h4>
            <p className="policy_content_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quia ad deleniti esse illo debitis nam molestiae
              corporis suscipit laudantium iure fugiat quod quam iste, maxime ex
              ipsum atque illum accusantium sint est vel. Optio, labore!
              Eligendi neque ut ab. Minus, quaerat. Perspiciatis hic adipisci
              tenetur labore iure voluptates magnam deserunt, consequatur nam
              magni saepe exercitationem debitis facilis similique id molestiae
              pariatur consectetur, quod sapiente, rem laudantium? Culpa totam
              debitis, fuga aliquid ex non similique.
            </p>
          </div>

          {/* ------------------ FIRST CONTENT BOX ------------------ */}
          <div className="policy_content">
            <h4 className="policy_content_title">First Heading</h4>
            <p className="policy_content_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quia ad deleniti esse illo debitis nam molestiae
              corporis suscipit laudantium iure fugiat quod quam iste, maxime ex
              ipsum atque illum accusantium sint est vel. Optio, labore!
              Eligendi neque ut ab. Minus, quaerat. Perspiciatis hic adipisci
              tenetur labore iure voluptates magnam deserunt, consequatur nam
              magni saepe exercitationem debitis facilis similique id molestiae
              pariatur consectetur, quod sapiente, rem laudantium? Culpa totam
              debitis, fuga aliquid ex non similique.
            </p>
          </div>

          {/* ------------------ FIRST CONTENT BOX ------------------ */}
          <div className="policy_content">
            <h4 className="policy_content_title">First Heading</h4>
            <p className="policy_content_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quia ad deleniti esse illo debitis nam molestiae
              corporis suscipit laudantium iure fugiat quod quam iste, maxime ex
              ipsum atque illum accusantium sint est vel. Optio, labore!
              Eligendi neque ut ab. Minus, quaerat. Perspiciatis hic adipisci
              tenetur labore iure voluptates magnam deserunt, consequatur nam
              magni saepe exercitationem debitis facilis similique id molestiae
              pariatur consectetur, quod sapiente, rem laudantium? Culpa totam
              debitis, fuga aliquid ex non similique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
