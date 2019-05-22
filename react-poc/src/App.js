import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/courses" component={CoursesPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
