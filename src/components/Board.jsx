import { useEffect, useState } from "react";
import Card from "./Card";
import Score from "./Score.jsx";
import ResetButton from "./ResetButton";

const Board = ({
  cards,
  setCards,
  turns,
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

  useEffect(
    () => {
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
    },
    [firstChoice, secondChoice] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((turns) => turns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto w-full h-full">
        <Score turns={turns} />
        <div className="rounded-xl grid grid-cols-4 gap-4  p-4">
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
        <ResetButton
          setCards={setCards}
          setTurns={setTurns}
          setFirstChoice={setFirstChoice}
          setSecondChoice={setSecondChoice}
        />
      </div>
    </>
  );
};

export default Board;
