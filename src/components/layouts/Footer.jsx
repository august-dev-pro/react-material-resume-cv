import React from "react";

const Footer = () => {
  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">Walter Patterson</div>
          <div className="footer-nav">
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
        </div>
        <div className="text-small">
          <div className="mb-1">
            &copy; Material Resume. All rights reserved.
          </div>
          <div>
            Design -{" "}
            <a
              href="https://templateflip.com/"
              target="_blank"
              rel="noreferrer"
            >
              TemplateFlip
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
