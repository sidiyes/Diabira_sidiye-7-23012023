import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';

import reportWebVitals from "./reportWebVitals";

import Home from './pages/Home/Home'
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/test" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
