import React, { Component } from 'react';
import './App.css';
import WordCard from './CharacterCard';
import CharacterCard from './CharacterCard';

const word = "Hello";
class App extends Component {
  render() {
    return (
    <div>
    <WordCard value="hello"/>
    </div>
    );
   }
   
}

export default App;
