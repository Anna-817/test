import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import initStore, { history } from '../store';

import Layout from "./Layout";
import Profile from "./Layout/Profile"; // это ужасно
import "./app.scss";

const { store, persistor } = initStore();

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={ null } persistor={ persistor }>
                <ConnectedRouter history={history}>
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
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
};
