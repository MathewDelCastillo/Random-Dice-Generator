import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const Dice = ({ face, rolling }) => {
console.log(face);
  const iconMapping = {
    one: faDiceOne,
    two: faDiceTwo,
    three: faDiceThree,
    four: faDiceFour,
    five: faDiceFive,
    six: faDiceSix,
  };


  const selectedIcon = iconMapping[face] || faDiceOne;

  const dieClass = `dice fas ${rolling ? 'rolling' : ''}`;

  return <FontAwesomeIcon className={dieClass} icon={selectedIcon} />;
};

export default Dice;
