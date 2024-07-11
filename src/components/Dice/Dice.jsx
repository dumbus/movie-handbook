import React from 'react';

import './Dice.scss';

import { diceDots } from '../../utils/diceDots';

const Dice = ({ value }) => {
  return (
    <div className="dice">
      {diceDots[value].map((row, rowIndex) => (
        <div key={rowIndex} className="dice__row">
          {row.map((dot, dotIndex) => (
            <div
              className={`dice__dot ${dot === 0 ? 'dice__dot_visible' : 'dice__dot_hidden'}`}
              key={dotIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dice;
