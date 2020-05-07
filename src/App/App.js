import React from 'react';
import '../main.css';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery'
import { HashRouter, Route, Link } from 'react-router-dom';
import Creator from '../Creator/Creator';

function App() {
  return (
    <div className="App">
      <HashRouter> 

        <Route path="/creacion" component={Creator}/>

        <Route path="/galeria" component={Gallery}/>

        <Route path="/" exact component={Home}/>
      </HashRouter>
    </div>
  );
}

export default App;
