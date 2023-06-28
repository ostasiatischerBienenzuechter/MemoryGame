import { useEffect, useState } from "react";
import { shuffleImages } from "../util/util";
import { IMAGES } from "../images";
import Card from "./Card";
import Score from "./Score";
import GameOverDisplay from "./GameOverDisplay";

const Board = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [gameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    shuffleImages(IMAGES, setCards);
  }, []);

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1000);
      checkSelectedCards();
    }
  }, [selectedCards]);

  useEffect(() => {
    if (score === IMAGES.length) {
      setTimeout(() => {
        setIsGameOver(true);
      }, 1000);
    }
  }, [score]);

  const checkSelectedCards = () => {
    if (selectedCards[0].num === selectedCards[1].num) {
      setScore((score) => score + 1);
      let updatedCards = cards.map((card) => {
        if (card.num === selectedCards[0].num) {
          return { ...card, isMatched: true };
        }
        return card;
      });

      setCards(updatedCards);
    } else {
      console.log("no match");
    }
    setTries((tries) => tries + 1);
  };

  return (
    <>
      {gameOver && (
        <GameOverDisplay
          score={score}
          setScore={setScore}
          tries={tries}
          setTries={setTries}
          setIsGameOver={setIsGameOver}
          setCards={setCards}
        />
      )}
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-midBrown from-10% via-lightTeal to-darkBrown">
        <div className="text-3xl mb-6">
          <Score score={score} tries={tries} />
        </div>
        <div className="grid grid-cols-4 gap-4 bg-black p-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
