const GameInput = ({ onSubmit, disabled, ...props }) => {
  return (
    <form
      className="flex items-end"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
    >
      <label htmlFor="game-input">
        Enter some letters
        <input
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          disabled={disabled}
          {...props}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={disabled}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
