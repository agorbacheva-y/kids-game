import Boy from "../images/Boy.svg";

const BoySvg = () => {
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
          <a>
            <rect 
              x="275" 
              y="350" 
              fill="green" 
              opacity="0.5" 
              width="425" 
              height="250" 
              onClick={() => alert("face")}
              style={{ cursor:"pointer"}}
            />
          </a>      
        </svg>
      </div>
  );
};
export default BoySvg;

/*

*/