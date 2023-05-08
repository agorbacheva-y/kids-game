import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import MainMenu from "./components/MainMenu";
import BodyPartGame from "./components/BodyPartGame";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/mainmenu" exact element={<MainMenu />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
