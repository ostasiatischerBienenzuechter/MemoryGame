import Board from "./components/Board";
import { useState, useEffect } from "react";
import { shuffleImages } from "./util/util";
import { IMAGES } from "./images";

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  useEffect(() => {
    shuffleImages(IMAGES, setCards, setTurns, setFirstChoice, setSecondChoice);
  }, []);

  return (
    <>
      <div>
        <Board
          cards={cards}
          setCards={setCards}
          turns={turns}
          setTurns={setTurns}
          firstChoice={firstChoice}
          secondChoice={secondChoice}
          setFirstChoice={setFirstChoice}
          setSecondChoice={setSecondChoice}
        />
      </div>
    </>
  );
}
