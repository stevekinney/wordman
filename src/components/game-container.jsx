import { useEffect, useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import GameInput from './game-input';
import GameStatus from './game-status';

const GameContainer = () => {
  const [colorGuess, setColorGuess] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(() => generateRandomColor());
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    if (hasGuessed && correctAnswer.toUpperCase() === colorGuess.toUpperCase()) setIsWinner(true);
  }, [hasGuessed])

  return (
    <>
      <ColorSwatch color={correctAnswer} />
      <GameInput
        value={colorGuess}
        onChange={(e) => setColorGuess(e.target.value)}
        onSubmit={() => setHasGuessed(true)}
        disabled={hasGuessed}
      />
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button
        onClick={() => {
          setCorrectAnswer(generateRandomColor());
          setHasGuessed(false);
          setColorGuess('');
        }}
        type={hasGuessed ? 'submit' : 'button'}
      >
        Reset Color
      </button>
    </>
  )
}

export default GameContainer