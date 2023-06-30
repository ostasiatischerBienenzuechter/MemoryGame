import "../App.css";

const Card = ({ card, handleChoice, isFlipped, disabled }) => {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div
      className={
        isFlipped
          ? "card open pointer-events-none transition ease-in-out delay-200"
          : "flex items-center justify-center md:h-44 md:w-44 relative cursor-pointer card transition ease-in-out"
      }
    >
      <div className="object-cover">
        <img
          src={card.img}
          alt=""
          className=" border-4 border-white md:w-44 md:h-44"
        />
      </div>
      <div
        onClick={handleClick}
        className="bg-cardCoverImg bg-cover bg-center h-full w-full absolute top-0 cardCover"
      ></div>
    </div>
  );
};

export default Card;
