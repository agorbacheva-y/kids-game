import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import EndGame from "./components/EndGame";
import BodyPartGame from "./components/BodyPartGame";
import Menu from "./components/Menu";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/endgame" exact element={<EndGame />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
