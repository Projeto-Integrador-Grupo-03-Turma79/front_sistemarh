import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'
import ListaFuncionarios from './pages/listafuncionarios/ListaFuncionarios'

function App() {

  return (
   <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/listafuncionarios" element={<ListaFuncionarios />} />
          <Route path="/sobre" element={<Sobre/>} />

        </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </>
  );
}

export default App
