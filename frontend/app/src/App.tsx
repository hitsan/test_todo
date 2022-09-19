import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ApiFetch from './components/ApiFetch';
import Letter from './components/Letter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ApiFetch />
        <Letter />
      </header>
    </div>
  );
}

export default App;
