import React, { Component } from 'react';
import Header from './layout/Header';
import MainView from './views/MainView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainView />
      </div>
    );
  }
}

export default App;
