import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import ShapeGame from "./components/ShapeGame";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
      <ShapeGame></ShapeGame>
    </BrowserRouter>
  );
};

export default App;
