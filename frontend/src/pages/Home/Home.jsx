import React from "react";
//import { Link } from "react-router-dom";

//import logo from "../images/LOGO.svg";

import "./Home.css";
import dataImmo from "../../api/data.json";

function Home() {
  console.log(dataImmo);

  return <div className="yesss">
    <h1>Hompe page</h1>
    
    <div className="boxCards">
      {/* Mes cards immos */}
    </div>
  </div>;
}

export default Home;

/* function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
    );
  }  
  
  export default Home;  */
