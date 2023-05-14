import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import BodyPartGame from "./components/BodyPartGame";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/Menu" exact element={<Menu />} />
        <Route path="/bodypartgame" exact element={<BodyPartGame />} />
      </Routes>
      <Menu></Menu>
    </BrowserRouter>
  );
};

export default App;
