import boy from "../images/Cartoon-Child-2.jpg";

// find actual url for image in internal folder
console.log(boy);

const BoyOne = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
    alert("This is the face");
  };

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
          href="/static/media/Cartoon-Child-2.a6539f99fff496ce21eb.jpg" 
          onClick={handleOnClick}
        />
      </map>
    </div>
  );
};

export default BoyOne;

// image map coordinates generated on: https://www.image-map.net/ 