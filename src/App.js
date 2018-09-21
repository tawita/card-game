import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import TawitaAsk from './TawitaAsk';

const word = "HELLO";
const Tawita = "ENGINEER"
class App extends Component {
  render() {
    return (
    <div className="activecard">
    <WordCard value={word}/>
    <TawitaAsk value = {Tawita}/>
    </div>
    );
   }
 }
export default App