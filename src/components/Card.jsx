import { useEffect, useState } from "react";
import "../App.css";

const Card = ({ card, selectedCards, setSelectedCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (
      selectedCards[0] === card ||
      selectedCards[1] === card ||
      card.isMatch
    ) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [selectedCards]);

  function handleClick() {
    setSelectedCards([...selectedCards, card]);
  }

  return (
    <div
      className={
        isFlipped
          ? "card open pointer-events-none transition ease-in-out delay-100"
          : "flex items-center justify-center h-44 w-44 relative cursor-pointer card transition ease-in-out"
      }
      onClick={handleClick}
    >
      <div className="object-cover">
        <img
          src={card.img}
          alt=""
          className=" border-4 border-white w-44 h-44"
        />
      </div>
      <div className="bg-cardCoverImg bg-cover bg-center h-full w-full absolute top-0 cardCover"></div>
    </div>
  );
};

export default Card;
