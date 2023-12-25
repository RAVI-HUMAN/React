// src/App.js

import React from 'react';
import './App.css';
import ApiDataComponent from './components/ApiDataComponent';
import Header from './components/Header';
import LoginLogoutComponent from './components/log';

function App() {
  return (
    <div className="App">
      <Header/>
      <ApiDataComponent />
      <LoginLogoutComponent/>
    </div>
  );
}

export default App;
