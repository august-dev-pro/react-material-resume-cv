import React from "react";

const Experience = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="experience">
      <div className="work-experience-section">
        <h2 className="h2 fw-light mb-4">Work Experience</h2>
        <div className="timeline">
          <div
            className="timeline-card timeline-card-info"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Frontend Developer{" "}
                <span className="text-muted h6">at Creative Agency</span>
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">
                May, 2015 - Present
              </div>
              <div>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition.
              </div>
            </div>
          </div>
          <div
            className="timeline-card timeline-card-info"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Graphic Designer{" "}
                <span className="text-muted h6">at Design Studio</span>
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">
                June, 2013 - May, 2015
              </div>
              <div>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </div>
            </div>
          </div>
          <div
            className="timeline-card timeline-card-info"
            data-aos="fade-in"
            data-aos-delay="400"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Junior Web Developer{" "}
                <span className="text-muted h6">at Indie Studio</span>
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">
                Jan, 2011 - May, 2013
              </div>
              <div>
                User generated content in real-time will have multiple
                touchpoints for offshoring. Organically grow the holistic world
                view of disruptive innovation via workplace diversity and
                empowerment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
