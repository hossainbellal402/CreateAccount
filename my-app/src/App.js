
import './App.css';
import React from 'react';
import Header from './Header.js';
import{ BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from './Login.js'

function App() {
  return (
    <div className="App">
       <h1>Leat't build new app ! </h1>
<Router>
<switch>
<Route path="/login">
<Login/>
<Header/>
</Route>

</switch>


</Router>
       
    </div>
  );
}

export default App;
