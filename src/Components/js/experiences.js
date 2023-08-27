import "../css/experiences.css";
import degree360 from "../../img/360degree.png";
import smartsecurity from "../../img/smartsecurity.png";
import gear from "../../img/gear5.png";
import onestop from "../../img/OneStop icon.png";

function Experiences() {
  return (
    <div className="exps" id="experience">
      <div>
        <h2 id="exp-title">Experience</h2>
      </div>
      <div className="cards">
        <div class="card">
          <img id="card-bg" src={degree360} alt="360degree" />
          <div class="card-info">
            <h3>
              <b>360 Degree</b>
            </h3>
            <dl>
              <dt>11/2016 - 01/2018</dt>
              <dd>Sales Representative</dd>
            </dl>
          </div>
        </div>
        <div class="card">
          <img id="card-bg" src={smartsecurity} alt="smart security" />
          <div class="card-info">
            <h3>
              <b>Smart Security LB</b>
            </h3>
            <dl>
              <dt>11/2020 - 05/2021</dt>
              <dd>Store keeper</dd>
            </dl>
          </div>
        </div>
        <div class="card">
          <img id="card-bg" src={gear} alt="gear5" />
          <div class="card-info">
            <h3>
              <b>5th Gear automotive</b>
            </h3>
            <dl>
              <dt>03/2022 - 06/2023</dt>
              <dd>Mechanic</dd>
            </dl>
          </div>
        </div>
        <div class="card">
          <img id="card-bg" src={onestop} alt="onestop" />
          <div class="card-info">
            <h3>
              <b>OneStop autoservices</b>
            </h3>
            <dl>
              <dt>12/2019 - Present</dt>
              <dd>CEO</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
