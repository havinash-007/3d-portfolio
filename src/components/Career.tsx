import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Dev Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on software development projects including building
              functional applications, debugging code, automating tasks,
              and strengthening core programming skills through hands-on
              project work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Karyo Brand Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a creative brand studio focusing on brand identity,
              strategy, storytelling websites, and creative digital experiences.
              Generated ~$30K revenue across 3 major clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
