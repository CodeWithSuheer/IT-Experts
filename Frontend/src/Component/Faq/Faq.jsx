import React from 'react';
import './faq.css';
import { useTheme } from '../../Theme/ThemeContext';

const Faq = () => {
  const { isDarkTheme } = useTheme();

  const themeStyle = {
    backgroundColor: isDarkTheme ? '#000' : 'white',
    color: isDarkTheme ? 'white' : '#252525',
  };

  const iconStyle = {
    color: isDarkTheme ? 'white' : '#252525',
  };

  return (
    <section className="collapse-area my-5 py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="accordion" id="accordionExample">
            {/* Item #1 */}
            <div className="accordion-item" style={themeStyle}>
              <h2 className="accordion-header" id="headingOne" style={{ color: isDarkTheme ? 'white' : '#252525' }}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={themeStyle}
                >
                  Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                style={themeStyle}
              >
                <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem amet ullam nostrum corrupti dicta rerum iure tempora consectetur doloribus qui, repellat ratione deserunt omnis itaque facere? Officia, distinctio mollitia! Illum et, rerum repudiandae ex a reiciendis. Eum est aliquid corporis!
                </div>
              </div>
            </div>

            {/* Item #2 */}
            <div className="accordion-item" style={themeStyle}>
              <h2 className="accordion-header" id="headingTwo" style={themeStyle}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={themeStyle}
                >
                  Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
                style={themeStyle}
              >
                <div className="accordion-body">
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus numquam neque, animi sed fugiat recusandae eos laudantium expedita voluptatem error repellendus porro consequatur reprehenderit quam, placeat similique dolores autem beatae itaque? Dolorem repellat reiciendis asperiores. Sed dicta, tempora aliquid exercitationem veniam, nostrum non praesentium adipisci modi culpa corrupti, laborum eum.
                </div>
              </div>
            </div>

            {/* Item #3 */}
            <div className="accordion-item" style={themeStyle}>
              <h2 className="accordion-header" id="headingThree" style={themeStyle}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={themeStyle}
                >
                  Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
                style={themeStyle}
              >
                <div className="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere doloremque dignissimos cumque. Consequuntur accusamus animi officiis perspiciatis consectetur illo sed cum ipsum, harum quibusdam, laboriosam suscipit corrupti impedit totam numquam ab nemo, amet enim unde libero exercitationem odit reprehenderit. Laborum autem quasi excepturi, ad in itaque facilis sapiente? Deleniti, quo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
