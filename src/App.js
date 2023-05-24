import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import Header from "./components/Header";
import Register from "./components/Register";
import ShapeGame from "./components/ShapeGame";
import EndGame from "./components/EndGame";
import FacePartGame from "./components/BodyPartGame/FacePartGame"
import BodyPartGame from "./components/BodyPartGame/BodyPartGame";
import Menu from "./components/Menu";
import Logout from "./components/Logout";
import Login from "./components/LoginFeature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/loginfeature" exact element={<Login />} />
        <Route path="/shapegame" exact element={<ShapeGame />} />
        <Route path="/endgame" exact element={<EndGame />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
        <Route path="/facepartgame" exact element={<FacePartGame />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;