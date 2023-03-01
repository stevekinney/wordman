import ExpensiveComponent from './expensive-component';
import GameContainer from './game-container';

const Application = () => {
  return (
    <main className="flex flex-col gap-8 mx-auto my-8 w-96">
      <GameContainer />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
