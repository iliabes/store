import React from 'react';
import Home from './Pages/Home/Home';
import Statistic from './Pages/Statistic/Statistic';
import Header from './global/Header/Header';
import './Style/index.sass'
import  './Style/normalize.css';
import {Routes,Route,} from "react-router-dom";
import Preloader from './global/Preloader/Preloader';
import { Provider } from 'react-redux'
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div  className="container">
      <Header/>
      <Preloader/>
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/statistic" element={<Statistic/>}/>
          </Routes>

    </div>
    </Provider>
  );
}

export default App;
