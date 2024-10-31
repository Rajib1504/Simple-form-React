import { useContext } from "react";
import { AssetContext } from "../grandPa/Grandpa";

const umaiya = () => {
  const gift = useContext(AssetContext);
  return (
    <div className="text-xl border-2 border-yellow-300 p-3">
      <h1 className="text-2xl">Umaiya</h1>
      <p>has:{gift}</p>
    </div>
  );
};

export default umaiya;
