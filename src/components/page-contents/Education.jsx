import React from "react";

const Education = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="education">
      <div className="education-section">
        <h2 className="h2 fw-light mb-4">Education</h2>
        <div className="timeline">
          <div
            className="timeline-card timeline-card-success"
            data-aos="fade-in"
            data-aos-delay="0"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Masters in Information Technology{" "}
                <span className="text-muted h6">
                  from International University
                </span>{" "}
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">2011 - 2013</div>
              <div>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition.
              </div>
            </div>
          </div>
          <div
            className="timeline-card timeline-card-success"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Bachelor of Computer Science{" "}
                <span className="text-muted h6">from Regional College</span>
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">2007 - 2011</div>
              <div>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </div>
            </div>
          </div>
          <div
            className="timeline-card timeline-card-success"
            data-aos="fade-in"
            data-aos-delay="400"
          >
            <div className="timeline-head px-4 pt-3">
              <div className="h5">
                Science and Mathematics{" "}
                <span className="text-muted h6">from Mt. High Scool</span>{" "}
              </div>
            </div>
            <div className="timeline-body px-4 pb-4">
              <div className="text-muted text-small mb-3">1995 - 2007</div>
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

export default Education;
