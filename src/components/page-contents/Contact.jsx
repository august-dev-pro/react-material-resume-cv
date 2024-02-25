import React from "react";

const Contact = () => {
  return (
    <div className="shadow-1-strong bg-white my-5 p-5" id="contact">
      <div className="contant-section">
        <h2 className="h2 fw-light text mb-4">Contact</h2>
        <div className="row mb-4">
          <div className="col-md-5" data-aos="fade-left" data-aos-delay="200">
            <div className="mt-1">
              <div className="h6">
                <i
                  className="fas fa-phone pe-2 text-muted"
                  //style="width:24px;opacity:0.85;"
                  style={{ width: "24px", opacity: "0.85" }}
                ></i>
                +0718-111-0011
              </div>
              <div className="h6">
                <i
                  className="far fa-envelope pe-2 text-muted"
                  //style="width:24px;opacity:0.85;"
                  style={{ width: "24px", opacity: "0.85" }}
                ></i>
                walter@company.com
              </div>
            </div>
            <div className="mt-5 d-print-none">
              <form action="https://formspree.io/your@email.com" method="POST">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="name">
                    Name
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                  />
                  <label className="form-label" for="email">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    //style="resize: none;"
                    style={{ resize: "none" }}
                    id="message"
                    rows="4"
                    required
                  ></textarea>
                  <label className="form-label" for="message">
                    Message
                  </label>
                </div>
                <button className="btn btn-info btn-block mb-4" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div
            className="col-md-7 d-print-none"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.9774799129763!2d-73.98032087190995!3d40.765927126473905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9cfcb250d%3A0xdb570ddcb766e3a8!2sNew%20York%20City%20Center!5e0!3m2!1sen!2sin!4v1614183731149!5m2!1sen!2sin"
              width="500"
              height="400"
              title="iframe"
              //style="border:0;width:100%;"
              style={{ border: "0", width: "100%" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
