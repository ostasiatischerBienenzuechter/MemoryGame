import { shuffleImages } from "../util/util";
import { IMAGES } from "../images";

const ResetButton = ({
  setCards,
  setTurns,
  setFirstChoice,
  setSecondChoice,
}) => {
  return (
    <button
      className="bg-gradient-to-r from-purple-200 to-purple-100 text-violet-900 text-2xl transition ease-in-out rounded-full mt-5 p-3 border-2 border-purple-800"
      onClick={() =>
        shuffleImages(
          IMAGES,
          setCards,
          setTurns,
          setFirstChoice,
          setSecondChoice
        )
      }
    >
      Restart Game
    </button>
  );
};

export default ResetButton;
