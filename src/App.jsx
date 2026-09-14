import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar.jsx'
import AuthProvider from './context/AuthContext.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;