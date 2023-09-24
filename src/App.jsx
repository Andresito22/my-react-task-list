import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Home from './pages/Home';
import SobreNosotros from './pages/SobreNosotros';
import Tareas from './pages/Tareas';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;