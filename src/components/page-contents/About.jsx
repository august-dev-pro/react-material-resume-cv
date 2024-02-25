import React from "react";

const About = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="about">
      <div className="about-section">
        <div className="row">
          <div className="col-md-6">
            <h2 className="h2 fw-light mb-4">About Me</h2>
            <p>
              Hello! I’m Walter Patterson. I am passionate about UI/UX design
              and Web Design. I am a skilled
              <strong>front-end developer</strong> and master of graphic design
              tools such as Photoshop and Sketch. I am a quick learner and a
              team worker that gets the job done.
            </p>
            <p>
              I can easily capitalize on low hanging fruits and quickly maximize
              timely deliverables for real-time schemas.
            </p>
          </div>
          <div className="col-md-5 offset-lg-1">
            <div className="row mt-2">
              <h2 className="h2 fw-light mb-4">Bio</h2>
              <div className="col-sm-5">
                <div className="pb-2 fw-bolder">
                  <i
                    className="far fa-calendar-alt pe-2 text-muted"
                    //style="width:24px;opacity:0.85;"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>{" "}
                  Age
                </div>
              </div>
              <div className="col-sm-7">
                <div className="pb-2">28</div>
              </div>
              <div className="col-sm-5">
                <div className="pb-2 fw-bolder">
                  <i
                    className="far fa-envelope pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                    //style="width:24px;opacity:0.85;"
                  ></i>{" "}
                  Email
                </div>
              </div>
              <div className="col-sm-7">
                <div className="pb-2">walter@company.com</div>
              </div>
              <div className="col-sm-5">
                <div className="pb-2 fw-bolder">
                  <i
                    className="fab fa-skype pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>{" "}
                  Skype
                </div>
              </div>
              <div className="col-sm-7">
                <div className="pb-2">username@skype.com</div>
              </div>
              <div className="col-sm-5">
                <div className="pb-2 fw-bolder">
                  <i
                    className="fas fa-phone pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>{" "}
                  Phone
                </div>
              </div>
              <div className="col-sm-7">
                <div className="pb-2">+0718-111-0011</div>
              </div>
              <div className="col-sm-5">
                <div className="pb-2 fw-bolder">
                  <i
                    className="fas fa-map-marker-alt pe-2 text-muted"
                    style={{ width: "24px", opacity: "0.85" }}
                  ></i>{" "}
                  Address
                </div>
              </div>
              <div className="col-sm-7">
                <div className="pb-2">131 W, City Center, New York, U.S.A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
