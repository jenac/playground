import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';
import PageNotFound from './components/PageNotFound';
import CoursesPage from './components/courses/CoursesPage';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import ManageCoursePage from './components/courses/ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Header></Header>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/courses" component={CoursesPage}></Route>
            <Route path="/course/:slug" component={ManageCoursePage}></Route>
            <Route path="/course" component={ManageCoursePage}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar></ToastContainer>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
