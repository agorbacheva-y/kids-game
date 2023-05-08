import boy from "../images/Cartoon-Child-2.jpg";

// find actual url for image in internal folder
console.log(boy);

const BoyOne = () => {
  const onClick = (e) => {
    e.preventDefault();
    onClick();
  }

  return(
    <div className="container">
      <img 
        src="/static/media/Cartoon-Child-2.a6539f99fff496ce21eb.jpg"
        height="500"
        width="400"
        alt="boy"
        useMap="#boy-one"
      />
      <map id="boy-one" name="boy-one">
        <area 
          shape="poly" 
          coords="89,206,122,245,170,259,244,259,273,248,301,213,291,182,243,187,225,172,200,161,178,171,162,165,145,177,122,172,89,191"
          alt="face" 
          onClick={() => alert("face")}
          style={{ cursor:"pointer"}}
        />
        
        <area 
          shape="circle"
          alt="left-hand" 
          coords="54,310,29"
          onClick={() => alert("left hand")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="circle"
          alt="right-hand" 
          coords="343,300,28" 
          onClick={() => alert("right hand")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="left-arm" 
          coords="71,289,86,309,147,295,139,264"
          onClick={() => alert("left arm")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="right-arm" 
          coords="259,293,268,264,327,282,320,302"
          onClick={() => alert("right arm")}
          style={{ cursor:"pointer"}}
        />
        
        <area 
          shape="poly"
          alt="body"
          coords="146,263,259,263,263,398,144,400"
          onClick={() => alert("body")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="left-leg"
          coords="144,399,204,404,194,465,140,460"
          onClick={() => alert("left leg")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="right-leg"
          coords="208,407,264,400,270,457,219,467"
          onClick={() => alert("right leg")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="left-foot"
          coords="137,476,178,482,182,465,141,461"
          onClick={() => alert("left foot")}
          style={{ cursor:"pointer"}}
        />

        <area 
          shape="poly"
          alt="right-foot"
          coords="221,467,222,478,274,473,272,457"
          onClick={() => alert("right foot")}
          style={{ cursor:"pointer"}}
        />

      </map>
    </div>
  );
};

export default BoyOne;

// image map coordinates generated on: https://www.image-map.net/ 