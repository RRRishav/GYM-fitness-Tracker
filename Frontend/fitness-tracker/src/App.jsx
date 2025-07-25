import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Home from './components/Home'
// import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App() {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}


export default App
