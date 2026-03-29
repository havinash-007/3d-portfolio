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
                <h5>NIAT · S-VYASA University</h5>
              </div>
              <h3>2025–29</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science
              Engineering. Focused on AI/ML, Data Structures, and modern
              software development.
            </p>
          </div>
          <div className="education-info-box">
            <div className="education-info-in">
              <div className="education-role">
                <h4>Higher Secondary</h4>
                <h5>Dalmia Vidya Mandir</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed higher secondary education with a focus on Science
              and Mathematics, building a strong foundation for engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
