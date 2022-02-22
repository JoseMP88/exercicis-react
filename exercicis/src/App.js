import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Contador from "./pages/Contador";
import Graella from "./pages/Graella";
import Acordeo from "./pages/Acordeo";
import Carrusel from "./pages/Carrusel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contador" element={<Contador />}></Route>
          <Route path="Acordeo" element={<Acordeo />}></Route>
          <Route path="Graella" element={<Graella />}></Route>
          <Route path="Carrusel" element={<Carrusel />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
