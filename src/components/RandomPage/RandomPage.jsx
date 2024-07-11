import React, { useEffect, useState } from 'react';

import './RandomPage.scss';

import Dice from '../Dice/Dice';

const RandomPage = () => {
  const [diceValue, setDiceValue] = useState(1);

  useEffect(() => {
    const rollDice = () => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
    };

    const intervalId = setInterval(rollDice, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="random-page container">
      <h2 className="random-page__title title">
        Ищем интересный фильм специально для Вас...
      </h2>
      <Dice value={diceValue} />
    </div>
  );
};

export default RandomPage;
