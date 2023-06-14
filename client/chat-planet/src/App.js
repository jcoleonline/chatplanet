import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login';
// import axios from 'axios';

function App() {
  // axios.defaults.baseURL = 'http://localhost:5000';
  // axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
