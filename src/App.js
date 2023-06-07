import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import About from "./main/About";
import Menu from "./main/Menu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
