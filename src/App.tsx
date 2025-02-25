import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ListaFuncionarios from './pages/listafuncionarios/ListaFuncionarios';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaFuncionarios />} />
        <Route path="/listafuncionarios" element={<ListaFuncionarios />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
