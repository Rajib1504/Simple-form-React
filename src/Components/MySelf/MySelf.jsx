import Special from "../Special/Special";

const mySelf = ({ asset }) => {
  return (
    <div className="text-xl border-2 border-yellow-300 p-3">
      <h1 className="text-2xl">MySelf</h1>
      <Special asset={asset}></Special>
    </div>
  );
};

export default mySelf;
