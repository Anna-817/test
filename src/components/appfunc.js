import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Layout from "./Layout";
import Profile from "./Layout/Profile"; // это ужасно
import "./app.scss";

export const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' component={ Layout } />
                  <Route exact path='/profile/' component={ Profile } />
                  <Route
                      exact
                      path='/chat/:chatId/'
                      render={ (obj) => <Layout
                          chatId={ Number(obj.match.params.chatId) }
                      />
                      }
                  />
              </Switch>
          </BrowserRouter>
      </Provider>
  );
};
