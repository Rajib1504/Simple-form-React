import { useContext } from "react";
import { MoneyContext } from "../grandPa/Grandpa";

const Brother = () => {
  const [coin] = useContext(MoneyContext);
  return (
    <div className="text-xl border-2 border-yellow-300 p-3">
      <h1 className="text-2xl">Brother</h1>
      <p>{coin}</p>
    </div>
  );
};

export default Brother;
