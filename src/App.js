import "./App.css";
import "aos";
import "./css/font-awesome/css/all.min.css";
import "./css/mdb.min.css";
import "./css/aos.css";
import "./css/main.css";
//import "./css/mdb.rtl.min.css";
/* script import */
import "./scripts/mdb.min.js";
// import "./scripts/aos.js";
import "./scripts/main.js";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import About from "./components/page-contents/About";
import Contact from "./components/page-contents/Contact";
import Education from "./components/page-contents/Education";
import Experience from "./components/page-contents/Experience";
import Introduct from "./components/page-contents/Introduct";
import Portfolio from "./components/page-contents/Portfolio";
import Reference from "./components/page-contents/Reference";
import Skills from "./components/page-contents/Skills";

function App() {
  return (
    <div className="App bg-light" id="top">
      <Header />
      <div class="page-content">
        <div class="container">
          <div class="resume-container">
            <Introduct />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Portfolio />
            <Reference />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
