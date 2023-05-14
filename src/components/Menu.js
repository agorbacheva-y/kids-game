import ReusableButton from "./ReusableButton";


const Menu = () => {


    return (
     <div className="container"> 
        <h1>Choose a Game</h1>
        <ReusableButton>Body Parts</ReusableButton>
      <ReusableButton>Find objects</ReusableButton>
      <ReusableButton>Drag & drop</ReusableButton>

      <br></br>
      <ReusableButton>Logout</ReusableButton>
     </div>
    );
};

export default Menu;