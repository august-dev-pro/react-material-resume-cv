import React from "react";

const Portfolio = () => {
  return (
    <div
      className="shadow-1-strong bg-white my-5 p-5 d-print-none"
      id="portfolio"
    >
      <div className="portfolio-section">
        <h2 className="h2 fw-light mb-4">Portfolio</h2>
        <div className="row g-0">
          <div className="col-md-6">
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
              <img
                alt="desc"
                className="img-fluid"
                src="images/project-1.jpg"
                width="800"
                height="500"
              />
            </a>
          </div>
          <div
            className="col-md-6 d-flex align-items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="m-4 mt-md-2">
              <p className="text-teal text-small">
                Frontend / HTML / CSS / JavaScript
              </p>
              <h3>Photo Agency Website</h3>
              <p className="text-muted">
                Built highly performant website front end for a Photography
                agency. Delivered codebase in HTML, CSS and modern JavaScript.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0 portfolio-reverse">
          <div
            className="col-md-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="m-4 mt-md-2 text-end">
              <p className="text-teal text-small">
                Graphic Design / Photoshop / Sketch
              </p>
              <h3>Restaurant Website Design</h3>
              <p className="text-muted">
                Web design for popular resturant chain involving complex layouts
                done in both Photoshop and Sketch. Collaborated with back-end
                and front-end team for finished product.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
              <img
                alt="desc"
                className="img-fluid"
                src="images/project-2.jpg"
                width="800"
                height="500"
              />
            </a>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-6">
            <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
              <img
                alt="desc"
                className="img-fluid"
                src="images/project-3.jpg"
                width="800"
                height="500"
              />
            </a>
          </div>
          <div
            className="col-md-6 d-flex align-items-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="m-4 mt-md-2">
              <p className="text-teal text-small">
                Frontend / HTML / CSS / JavaScript
              </p>
              <h3>E-Commerce Website</h3>
              <p className="text-muted">
                Built highly performant website for an E-commerce Portal. Worked
                with back-end team to timely deliver codebase in HTML, CSS and
                modern JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
