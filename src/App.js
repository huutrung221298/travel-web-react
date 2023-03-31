import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import  Home  from './components/pages/Home.js'
import Service from './components/pages/Service.js'
import Product from './components/pages/Product.js'
import SignUp from './components/pages/SignUp.js'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Service />} />
          <Route path='/products' exact element={<Product />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
