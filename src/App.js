import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import Menu from "./menu/Menu";
import SubItemsList from "./menu/SubItemsList";
import Product from "./menu/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<SubItemsList />} />
        <Route path="/menu/product/:item" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
