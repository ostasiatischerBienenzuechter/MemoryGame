const Score = ({ turns }) => {
  return (
    <div className="text-violet-900 text-3xl bg-gradient-to-r from-purple-200 to-purple-100 px-6 py-1 mb-5 mt-5 rounded-full">
      Turns: {turns}
    </div>
  );
};

export default Score;
