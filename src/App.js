import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Home from "./pages/home/home";


import store from "./store";

class App extends Component {

    render(){
    return (
        <Provider store={store}>
          <div className="App">
            <Home/>
          </div>
        </Provider>
    );
  }

}

export default App;
