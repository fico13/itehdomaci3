import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import { Route, Link } from 'react-router-dom';
import { useState } from 'react';


function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default App;
