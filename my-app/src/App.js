
import './App.css';
import React from "react";
import Header from './Header.js';
import{ BrowserRouter as Router,Route,switch } from "react-router-dom";
  

function App() {
  return (
    <div className="App">
       <h1>Leat't build new app ! </h1>

       <Header/>
    </div>
  );
}

export default App;
