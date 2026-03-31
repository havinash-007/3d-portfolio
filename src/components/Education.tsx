import "./styles/Education.css";

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-container">
        <h2>
          My <span>&</span>
          <br /> Education
        </h2>
        <div className="education-info">
          <div className="education-timeline">
            <div className="education-dot"></div>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>B.Tech in CSE</h4>
                <h5>NIAT (NxtWave Institute of Advanced Technologies)</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science
              Engineering. Active President of the Entrepreneurship &amp; Development
              Club and Ideathon Winner at NIAT.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Certification & Grants</h4>
                <h5>IIT Kanpur & YC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed IIT Kanpur × MeitY Entrepreneurship Essentials Certificate. 
              Applied for YC Startup School India and actively participating in hackathons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
