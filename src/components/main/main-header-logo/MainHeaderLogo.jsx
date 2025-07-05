import "./mainheaderlogo.css";
import Features from "../features/Features";
import animation from "/images/icon-animation.svg";
import business from "/images/icon-business.svg";
import crypto from "/images/icon-crypto.svg";
import design from "/images/icon-design.svg";
import photography from "/images/icon-photography.svg";

export default function MainHeaderLogo() {
  return (
    <div className="main-container">
      <div className="main-header-logo-container">
        <div className="title-button-wrapper">
          <div className="title-wrapper">
            <h1>
              Maximize skill, <br />
              minimize budget
            </h1>
            <p className="description">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>
          <div className="getStartedBtn-wrapper">
            <button className="getStartedBtn orangeBtn">
              <span className="orangeBtn-span">Get Started</span>
            </button>
          </div>
        </div>
        <div className="hero-wrapper"></div>
      </div>
      <div className="features-wrapper">
        <div className="orange-box">
          <span className="orange-box-text">
            Check out our most popular courses!
          </span>
        </div>

        <Features
          image={animation}
          title={"Animation"}
          description2={
            "Learn the latest animation techniques to create stunning motion design and captivate your audience."
          }
        />
        <Features
          image={design}
          title={"Design"}
          description2={
            "Create beautiful, usable interfaces to help shape the future of how the web looks."
          }
        />
        <Features
          image={photography}
          title={"Photography"}
          description2={
            "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
          }
        />
        <Features
          image={crypto}
          title={"Crypto"}
          description2={
            "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
          }
        />
        <Features
          image={business}
          title={"Business"}
          description2={
            "A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
          }
        />
      </div>
    </div>
  );
}
