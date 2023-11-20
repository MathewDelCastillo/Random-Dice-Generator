import React from 'react';
import ReactDOM from 'react-dom';
import Rolldice from './Rolldice.js'; // Import the RollDice component
import './App.css'
ReactDOM.render(
  <React.StrictMode>
    <Rolldice /> {/* Render the RollDice component */}
  </React.StrictMode>,
  document.getElementById('root')
);