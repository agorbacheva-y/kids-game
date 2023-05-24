import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import ShapeGame from "./ShapeGame";
import EndGame from "./EndGame";
import BodyPartGame from "./BodyPartGame";
import Menu from "./Menu";
import Logout from "./Logout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/shapegame" exact element={<ShapeGame />} />
        <Route path="/endgame" exact element={<EndGame />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;