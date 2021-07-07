import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider } from 'react-redux';
//Redux Persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// Router
import { BrowserRouter, Route} from "react-router-dom";
//css
import './index.css';

// src
import * as Containers from './containers';
import store from './redux/store';

const persistor = persistStore(store);
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
    <Containers.NavigationBarContainer />
    <Route path={"/auth"}><Containers.AuthContainer /></Route>
    <Route path={"/home"}><Containers.HomeContainer /></Route>
  </React.StrictMode>
  </PersistGate>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
