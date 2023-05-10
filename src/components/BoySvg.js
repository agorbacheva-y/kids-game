import Boy from "../images/Boy.svg";

const BoySvg = () => {
  const onClick = (e) => {
    e.preventDefault();
    onClick();
  }

  return (
      <div className="container">
        <img src={Boy} className="svg-boy"/>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 1140" 
          className="svg-overlay"
          x="0" 
          y="0"
        >
          <a className="svg-click">
            <ellipse cx="490" cy="445" rx="275" ry="165" onClick={() => alert("face")} />
          </a> 

          <a className="svg-click">
            <rect x="360" y="600" width="295" height="420" onClick={() => alert("body")} />
          </a>    

          <a className="svg-click">
            <circle cx="150" cy="740" r="80" onClick={() => alert("left hand")} />
          </a> 

          <a className="svg-click">
            <circle cx="850" cy="710" r="80" onClick={() => alert("right hand")} />
          </a> 

          <a className="svg-click">
            <ellipse cx="400" cy="1240" rx="80" ry="30" onClick={() => alert("left foot")} />
          </a> 

          <a className="svg-click">
            <ellipse cx="630" cy="1240" rx="80" ry="30" onClick={() => alert("right foot")} />
          </a> 

        </svg>
      </div>
  );
};
export default BoySvg;