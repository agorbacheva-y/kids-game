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
            <rect 
              x="275" 
              y="350" 
              width="425" 
              height="250" 
              onClick={() => alert("face")}
            />
          </a> 

          <a className="svg-click">
            <rect 
              x="370" 
              y="600" 
              width="260" 
              height="335" 
              onClick={() => alert("body")}
            />
          </a>    

          <a className="svg-click">
            <rect 
              x="160" 
              y="650" 
              width="110" 
              height="110" 
              onClick={() => alert("left hand")}
            />
          </a> 

          <a className="svg-click">
            <rect 
              x="725" 
              y="630" 
              width="110" 
              height="110" 
              onClick={() => alert("right hand")}
            />
          </a> 

        </svg>
      </div>
  );
};
export default BoySvg;

/*

*/