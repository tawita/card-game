import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "HELLO";
class App extends Component {
  render() {
    return (
    <div className="activecard">
    <WordCard value={word}/>
    </div>
    );
   }
 }
export default App