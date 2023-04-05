import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
