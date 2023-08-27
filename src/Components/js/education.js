import "../css/education.css";
import certificate from "../../img/certificate.png";
import languages from "../../img/language.png";
import skills from "../../img/skills.png";

function Education() {
  return (
    <div className="education">
      <div className="edu-header">
        <h2 id="edu-header">More about me</h2>
      </div>
      <div className="cards">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="certificate" alt="certificate" src={certificate} />
              <p>Certificates</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>Bachelor of arts: Business Management</li>
                <br />
                <li>The nascent petroleum sector Training-2021</li>
                <br />
                <li>STEP Training with Leuphana de</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="langs" alt="langs" src={languages} />
              <p>Languages</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>Arabic</li>
                <br />
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img id="skills" alt="skills" src={skills} />
              <p>Skills</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>AdWords Strategy</li>
                <li>Process Improvement</li>
                <li>Business Alliance</li>
                <li>Business Development</li>
                <li>Team Leadership</li>
                <li>And more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
