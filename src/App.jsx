import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Body from './components/Body';

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
