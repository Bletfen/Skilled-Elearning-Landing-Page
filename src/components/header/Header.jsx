import "./header.css";
import LogoDark from "/images/logo-dark.svg";
export default function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img src={LogoDark} alt="logo-dark" />
      </div>
      <div className="getStartedBtn-wrapper">
        <button className="getStartedBtn">
          <span className="getStartedBtn-text">Get Started</span>
        </button>
      </div>
    </div>
  );
}
