import "./styles.css";
import Layout from "./Layout";
import Product from "./Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
