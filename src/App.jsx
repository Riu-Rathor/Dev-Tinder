import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    <Navbar/>
    </>
  )
}

export default App
