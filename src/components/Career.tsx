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
                <h4>Python Dev Intern</h4>
                <h5>CodeAlpha</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on Python development projects including building
              functional applications, debugging code, automating tasks,
              and strengthening core programming skills through hands-on
              project work.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Web Projects</h4>
                <h5>Self-Directed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building AI-powered applications, chatbots, and full-stack
              web projects. Actively learning Machine Learning, Robotics,
              and Cloud Computing while contributing to open-source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
