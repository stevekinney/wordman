const GameStatus = ({ hasGuessed, isWinner }) => {
  if (hasGuessed && !isWinner)
    return (
      <div className="p-4 text-red-700 bg-red-300 border border-red-900">
        Nope. Sorry.
      </div>
    );
  if (hasGuessed && isWinner)
    return (
      <div className="p-4 text-green-700 bg-green-300 border border-green-900">
        Wow, you actually won.
      </div>
    );
  return (
    <div className="p-4 border border-cyan-700 bg-cyan-300 text-cyan-900">
      Try and guess, I guess.
    </div>
  );
};

export default GameStatus;
