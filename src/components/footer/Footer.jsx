import "./footer.css";
import LogoLight from "/images/logo-light.svg";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-wrapper">
        <img src={LogoLight} alt="logo-light" />
      </div>
      <div className="getStartedBtn-wrapper footer-button">
        <button className="getStartedBtn footerBtn">
          <span className="getStartedBtn-text footer-button-text">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
}
