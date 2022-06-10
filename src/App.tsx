import React from 'react';
import Home from './Pages/Home/Home';
import Statistic from './Pages/Statistic/Statistic';
import Header from './global/Header/Header';
import './Style/index.sass'
import  './Style/normalize.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
function App() {
  return (
    <div  className="container">
      <Header/>
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/statistic" element={<Statistic/>}/>
          </Routes>

    </div>
  );
}

export default App;
