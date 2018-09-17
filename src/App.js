import React, { Component } from 'react';
import './App.css';
import WordCard from './CharacterCard';

class App extends Component {
  render() {
    return (
    <div className="activeCard">
    <WordCard value="hello"/>
    </div>
    );
   }
   
}

export default App;
