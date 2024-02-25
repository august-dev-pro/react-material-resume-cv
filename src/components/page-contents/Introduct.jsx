import React from "react";

const Introduct = () => {
  return (
    <div className="shadow-1-strong bg-white my-5" id="intro">
      <div className="bg-info text-white">
        <div className="cover bg-image">
          <img src="images/header-background.jpg" alt="desc" />
          <div
            className="mask"
            // style="background-color: rgba(0, 0, 0, 0.7);backdrop-filter: blur(2px);"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropfilter: "blur(2px)",
            }}
          >
            <div className="text-center p-5">
              <div className="avatar p-1">
                <img
                  className="img-thumbnail shadow-2-strong"
                  src="images/avatar.jpg"
                  width="160"
                  height="160"
                  alt="desc"
                />
              </div>
              <div className="header-bio mt-3">
                <div data-aos="zoom-in" data-aos-delay="0">
                  <h2 className="h1">Walter Patterson</h2>
                  <p>Front-end Developer and Graphic Designer</p>
                </div>
                <div
                  className="header-social mb-3 d-print-none"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <nav role="navigation">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://twitter.com/templateflip"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter"></i>
                          <span className="menu-title sr-only">Twitter</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.facebook.com/templateflip"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook"></i>
                          <span className="menu-title sr-only">Facebook</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://www.instagram.com/templateflip"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                          <span className="menu-title sr-only">Instagram</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://github.com/templateflip"
                          title="Github"
                        >
                          <i className="fab fa-github"></i>
                          <span className="menu-title sr-only">Github</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="d-print-none">
                  <a
                    className="btn btn-outline-light btn-lg shadow-sm mt-1 me-3"
                    href="material-resume.pdf"
                    data-aos="fade-right"
                    data-aos-delay="700"
                  >
                    Download CV
                  </a>
                  <a
                    className="btn btn-info btn-lg shadow-sm mt-1"
                    href="#contact"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduct;
