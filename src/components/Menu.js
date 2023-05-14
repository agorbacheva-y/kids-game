import ReusableButton from "./ReusableButton";
import CloseButton from 'react-bootstrap/CloseButton';
import Home from "./Home";



const Menu = () => {
    return (
     <div className="container"> 
      <CloseButton className="closebtn"></CloseButton>

        <h1>Choose a Game</h1>
        <ReusableButton>Body Parts</ReusableButton>
      <ReusableButton>Find objects</ReusableButton>
      <ReusableButton>Drag & drop</ReusableButton>
     </div>
    );
};

export default Menu;