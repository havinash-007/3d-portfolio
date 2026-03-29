import { useState, useCallback } from "react";
import "./styles/Work.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ScraftX-AI-LLM",
    category: "AI-Powered LLM Application",
    description:
      "AI-powered marketing assistant for artisans and crafts people focused on intelligent interactions and modern GenAI workflows.",
    tools: ["Python", "GenAI", "LLM", "API"],
    github: "https://github.com/saagnik23/ScraftX-AI-LLM",
  },
  {
    title: "BasicChatBot",
    category: "Conversational AI",
    description:
      "Built a basic chatbot to understand conversational flow, user input handling, and response logic.",
    tools: ["Python", "NLP", "AI", "Automation"],
    github: "https://github.com/saagnik23/BasicChatBot",
  },
  {
    title: "Hangmanpy",
    category: "Python Game",
    description:
      "Python-based Hangman game showcasing clean logic building, OOP principles, and code structure.",
    tools: ["Python", "OOP", "CLI", "Logic"],
    github: "https://github.com/saagnik23/Hangmanpy",
  },
  {
    title: "StockPortfolioTracker",
    category: "Financial Data Application",
    description:
      "Python project for stock portfolio tracking, data handling, and financial logic simulation.",
    tools: ["Python", "Data", "Finance", "API"],
    github: "https://github.com/saagnik23/StockPortfolioTracker",
  },
  {
    title: "Automated-Social-Media-Post",
    category: "Automation Script",
    description:
      "Utility designed to automate the scheduling and posting of social media content via integrations.",
    tools: ["Automation", "API", "Scripting"],
    github: "https://github.com/saagnik23/Automated-Social-Media-Post",
  },
  {
    title: "Daily-News-Feed",
    category: "Data Aggregation",
    description:
      "Application built to automatically fetch, parse, and organize daily news feeds from various external sources.",
    tools: ["Data", "API", "Scripting"],
    github: "https://github.com/saagnik23/Daily-News-Feed",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="projects">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack</span>
                          <div className="carousel-badges">
                            {project.tools.map((tool, i) => (
                              <span className="tech-badge" key={i}>
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-github-link"
                          data-cursor="disable"
                        >
                          <FaGithub /> View on GitHub
                        </a>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <div className="project-visual" data-project={index}>
                        <div className="project-visual-icon">
                          <span className="project-visual-number">0{index + 1}</span>
                          <span className="project-visual-name">{project.title}</span>
                        </div>
                        <div className="project-visual-glow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
