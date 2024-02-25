import React from "react";

const Reference = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="references">
      <div className="reference-section">
        <h2 className="h2 fw-light mb-4">References</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex mb-2">
              <div className="avatar">
                <img
                  alt="desc"
                  src="images/reference-image-1.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div className="header-bio m-3 mb-0">
                <h3 className="h6 mb-1" data-aos="fade-left" data-aos-delay="0">
                  Aiyana
                </h3>
                <p
                  className="text-muted text-small"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  CEO / Web Design Company
                </p>
              </div>
            </div>
            <div className="d-flex">
              <i className="text-secondary fas fa-quote-left"></i>
              <p
                className="lead mx-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex mb-2">
              <div className="avatar">
                <img
                  alt="desc"
                  src="images/reference-image-2.jpg"
                  width="60"
                  height="60"
                />
              </div>
              <div className="header-bio m-3 mb-0">
                <h3 className="h6 mb-1" data-aos="fade-left" data-aos-delay="0">
                  Alexander
                </h3>
                <p
                  className="text-muted text-small"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  Front-end Developer / Web Design Company
                </p>
              </div>
            </div>
            <div className="d-flex">
              <i className="text-secondary fas fa-quote-left"></i>
              <p
                className="lead mx-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Walter is a great co-worker and problem solver. He is quick to
                extend his helping hand and makes a good team player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
