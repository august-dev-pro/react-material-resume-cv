import React from "react";

const Header = () => {
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="pt-4 clearfix">
          <h1 className="site-title mb-0">Walter Patterson</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#about" title="About">
                    <span className="menu-title">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills" title="Skills">
                    <span className="menu-title">Skills</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience" title="Experience">
                    <span className="menu-title">Experience</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#education" title="Education">
                    <span className="menu-title">Education</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio" title="Portfolio">
                    <span className="menu-title">Portfolio</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#references" title="References">
                    <span className="menu-title">References</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact" title="Contact">
                    <span className="menu-title">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
