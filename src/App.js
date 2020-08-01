import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import NavBar from "./components/navBar";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import User from "./pages/user/user";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import store from "./store";

class App extends React.Component {

    render(){
    return (
        <Provider store={store}>
          <div className="App">
              <BrowserRouter>
                  <NavBar/>
                  <Switch>
                      <Route
                          exact
                          path="/"
                          render={props => (
                              <div className="body-margin">
                                  <Home
                                      {...props}
                                  />
                              </div>
                          ) }/>
                      <Route
                          exact
                          path="/cart"
                          render={props => (
                              <div className="body-margin">
                                  <Cart
                                      {...props}
                                  />
                              </div>
                          ) }/>
                      <Route
                          exact
                          path="/user"
                          render={props => (
                              <div className="body-margin">
                                  <User
                                      {...props}
                                  />
                              </div>
                          ) }/>
                  </Switch>
              </BrowserRouter>
          </div>
        </Provider>
    );
  }

}

export default App;
