import React from "react";

const Skills = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
      <div className="skills-section">
        <h2 className="h2 fw-light mb-4">Professional Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <span className="fw-bolder">HTML</span>
              <div
                className="progress my-2 rounded"
                //style={{ height: "20px" }}
                style={{ height: "20px" }}
              >
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  data-aos-anchor=".skills-section"
                  //style="width: 95%;"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Master
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">CSS</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="200"
                  data-aos-anchor=".skills-section"
                  //style="width: 85%"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Expert
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">JavaScript</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="300"
                  data-aos-anchor=".skills-section"
                  //style="width: 75%"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Advance
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">WordPress</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="300"
                  data-aos-anchor=".skills-section"
                  //style="width: 75%"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Advance
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <span className="fw-bolder">Adobe Photoshop</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="400"
                  data-aos-anchor=".skills-section"
                  //style="width: 95%"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Master
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">Adobe Illustrator</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="400"
                  data-aos-anchor=".skills-section"
                  //style="width: 90%"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Expert
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">Sketch</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="500"
                  data-aos-anchor=".skills-section"
                  //style="width: 85%"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Expert
                </div>
              </div>
            </div>
            <div className="mb-3">
              <span className="fw-bolder">Adobe XD</span>
              <div className="progress my-2 rounded" style={{ height: "20px" }}>
                <div
                  className="progress-bar bg-secondary"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="600"
                  data-aos-anchor=".skills-section"
                  //style="width: 75%"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  Beginner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
