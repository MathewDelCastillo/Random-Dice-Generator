import React, { useState } from 'react';
import Dice from './Dice';

const RollDice = () => {
  const defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six'],
  };

  const [die1, setDie1] = useState(defaultProps.faces[0]);
  const [die2, setDie2] = useState(defaultProps.faces[0]);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    if (!rolling) {
      setRolling(true);

      setTimeout(() => {
        const newDie1 = defaultProps.faces[Math.floor(Math.random() * 6)];
        const newDie2 = defaultProps.faces[Math.floor(Math.random() * 6)];
        setDie1(newDie1);
        setDie2(newDie2);
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <div className="dice-container">
      <Dice face={die1} rolling={rolling} />
      <Dice face={die2} rolling={rolling} />
      <button className="rolling-button" onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;