export const shuffleImages = (IMAGES, setCards) => {
  let shuffledImages = [...IMAGES, ...IMAGES].map((img, idx) => ({
    ...img,
    id: idx + 1,
  }));

  setCards(shuffleFisherYates(shuffledImages));
};

function shuffleFisherYates(arr) {
  let i = arr.length;
  while (i--) {
    const ri = Math.floor(Math.random() * i);
    [arr[i], arr[ri]] = [arr[ri], arr[i]];
  }
  return arr;
}
