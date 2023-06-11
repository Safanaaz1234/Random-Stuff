import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Menu from "./menu/Menu";
import SubItemsList from "./menu/SubItemsList";
import Stub from "./menu/Stub";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<SubItemsList />} />
        <Route path="/menu/product/:item" element={<Stub />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
