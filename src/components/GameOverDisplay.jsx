import { IMAGES } from "../images";
import { shuffleImages } from "../util/util";

const GameOverDisplay = ({
  score,
  setScore,
  tries,
  setTries,
  setIsGameOver,
  setCards,
}) => {
  const handleClick = () => {
    shuffleImages(IMAGES, setCards);
    setIsGameOver(false);
    setScore(0);
    setTries(0);
  };

  return (
    <div className="h-screen, w-screen absolute top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-white border-2 max-w-sm w-full h-56 flex flex-col items-center gap-4">
        <p>You found all cards! Number of tries: {tries}</p>
        <p>Final Score: {score}</p>
        <button onClick={handleClick}>Play Again?</button>
      </div>
    </div>
  );
};

export default GameOverDisplay;
