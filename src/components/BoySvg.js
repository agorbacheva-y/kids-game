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
              x="210" 
              y="300" 
              width="550" 
              height="300" 
              onClick={() => alert("face")}
            />
          </a> 

          <a className="svg-click">
            <rect 
              x="360" 
              y="600" 
              width="295" 
              height="420" 
              onClick={() => alert("body")}
            />
          </a>    

          <a className="svg-click">
            <rect 
              x="80" 
              y="665" 
              width="140" 
              height="140" 
              onClick={() => alert("left hand")}
            />
          </a> 

          <a className="svg-click">
            <rect 
              x="790" 
              y="645" 
              width="140" 
              height="140" 
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