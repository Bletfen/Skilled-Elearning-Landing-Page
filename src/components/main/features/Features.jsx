import "./features.css";
export default function Features(props) {
  return (
    <div className="features-container">
      <img src={props.image} alt="animation-icon" className="svg-wrapper" />
      <div className="box-title-button-wrapper">
        <span className="box-title">{props.title}</span>
        <p className="description2">{props.description2}</p>
        <button className="box-button">
          <span className="box-button-text">Get Started</span>
        </button>
      </div>
    </div>
  );
}
