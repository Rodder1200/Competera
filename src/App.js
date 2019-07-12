import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import store from './config/store';
import MainPage from './components/MainPage';
import NotePage from './components/NotePage';
import CreateNote from './components/CreateNote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/Competera">
          <div>
            <ToastContainer hideProgressBar={true} />
            <div className="container">
              <div>
                <h1 className="display-2">
                  <Link to="/">COMPETERA TEST APP</Link>
                </h1>
              </div>
              <Switch>
                <Route exact path={'/'} component={MainPage} />
                <Route path={'/note/:id'} component={NotePage} />
                <Route path={'/create/:id'} component={CreateNote} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
