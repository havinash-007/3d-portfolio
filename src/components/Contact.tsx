import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Get in Touch</h4>
            <p>
              <a
                href="mailto:gangisettyhavinash@gmail.com"
                data-cursor="disable"
              >
                gangisettyhavinash@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Bengaluru, Karnataka, India</p>
            <h4>Education</h4>
            <p>
              B.Tech CSE — NIAT — 2024–2028
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/havinash-007"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/havinash-gangisetty-4a5522311"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:gangisettyhavinash@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="#resume"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social contact-resume"
            >
              Download Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed &amp; Built <br /> by <span>Havinash Gangisetty</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
