import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
import Pricing from './Components/Pricing/Pricing';
import './App.css';
import io from 'socket.io-client'
const socket = io.connect("http://localhost:5000")

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
