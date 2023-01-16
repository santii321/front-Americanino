import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import NuevoCliente from "./pages/NuevoCliente";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NuevoCliente />} />
        <Route path="NuevoCliente" element={<NuevoCliente />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
