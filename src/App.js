import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.scss';
import Home from "./pages/home/home";
import NavBar from "./components/navBar";


import store from "./store";

class App extends Component {

    render(){
    return (
        <Provider store={store}>
          <div className="App">
            <NavBar/>
            <div className="body-margin">
                <Home/>
            </div>
          </div>
        </Provider>
    );
  }

}

export default App;
