import { useEffect, useState } from "react";
import Card from "./Card";

const Board = ({
  cards,
  setCards,
  setTurns,
  firstChoice,
  secondChoice,
  setFirstChoice,
  setSecondChoice,
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.num === secondChoice.num) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.num === firstChoice.num) {
              return { ...card, isMatched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((turns) => turns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-midBrown from-10% via-lightTeal to-darkBrown">
        <div className="grid grid-cols-4 gap-4 bg-black p-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              isFlipped={
                card === firstChoice || card === secondChoice || card.isMatched
              }
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
