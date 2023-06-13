import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ShapeGame from "./components/ShapeGame";
import EndGame from "./components/EndGame";
import FacePartGame from "./components/BodyPartGame/FacePartGame"
import BodyPartGame from "./components/BodyPartGame/BodyPartGame";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/shapegame" exact element={<ShapeGame />} />
        <Route path="/endgame" exact element={<EndGame />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
        <Route path="/facepartgame" exact element={<FacePartGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;