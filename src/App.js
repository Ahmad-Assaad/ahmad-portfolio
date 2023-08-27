import "./Components/css/home.css";
import Navbar from "./Components/js/navbar";
import bio from "./img/ahmad-bio.jpg";
import resume from "./resume/Ahmad Assaad.pdf";
import whatsapp from "./img/whatsapp.png";
import linkedin from "./img/linkedin.png";
import mail from "./img/mail.png";
import Education from "./Components/js/education";
import Experiences from "./Components/js/experiences";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="head">
        <img id="logo" alt="logo" src={logo} />
        <h1 id="hello">Invoking my essence, I am Ahmad Assaad</h1>
      </div>
      <div className="home">
        <div id="biography">
          <img id="profile" alt="" src={bio} />
          <div>
            <h2 id="about-header">About me</h2>
            <p id="about-me">
              In every position I take on, as a multidimensional professional
              with a flexible skill set, I bring a special combination of
              abilities. Excellent at conceptualizing and guiding projects
              toward success, guaranteeing smooth operations and the best use of
              resources thanks to my experience as a business manager. I
              constantly exceed deadlines and go above and beyond expectations
              because of my time management skill. Expert at identifying and
              addressing complicated problems as a qualified service technician,
              demonstrating my technical know-how. As a quality controller, I
              take satisfaction in painstakingly enforcing standards to produce
              excellent results. As a committed team leader, I encourage
              cooperation and motivate coworkers to do their best work.
              Together, these qualities sum up my dedication to excellence
              across a range of tasks, making me a valuable asset to any
              endeavor.
            </p>
            <a id="resume" href={resume} download={resume}>
              Resume
            </a>
          </div>
        </div>
      </div>
      <br />
      <Education />
      <br />
      <Experiences />
      <br />
      <footer id="contact-me">
        <br />
        <div className="links">
          <a href="https://wa.me/19712279389" target="_blank" rel="noreferrer">
            <img id="whatsapp" alt="wp" src={whatsapp} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-assaad-396602125"
            target="_blank"
            rel="noreferrer"
          >
            <img id="linkedin" alt="linked" src={linkedin} />
          </a>
          <a href="mailto: ah.assaad@outlook.com">
            <img id="mail" alt="mail" src={mail} />
          </a>
        </div>
        <p id="copyright">
          Copyright © 2023 by Abdallah S. Ahmad. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
