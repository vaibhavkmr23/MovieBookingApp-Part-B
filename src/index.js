import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './screens/details/Details';
import registerServiceWorker from "./registerServiceWorker";
import Header from "./common/header/Header";
ReactDOM.render(
  // <React.StrictMode>
  <div>
    {/* <Home /> */}
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details' element={<Details />} />
      </Routes>
    </Router>
  </div>,
  // </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
