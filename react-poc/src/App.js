import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container-fluid">
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
      </div>
    </Router>
  );
}

export default App;
