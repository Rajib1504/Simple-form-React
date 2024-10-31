import { useContext } from "react";
import Tania from "../Cousin/Tania";
import Rajesh from "../Rajesh";
import { ReduceContext } from "../grandPa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(ReduceContext);
  return (
    <div className="text-xl border-2 border-yellow-300  rounded-lg p-6">
      <h1 className="text-2xl"> Uncle</h1>
      <div className="flex gap-3 justify-center">
        <Rajesh></Rajesh>
        <Tania></Tania>
      </div>
      <p>{money}</p>
      <button
        onClick={() => {
          setMoney(money - 1000);
        }}
        className="border-2 border-red-400"
      >
        Reduce(1000)
      </button>
    </div>
  );
};

export default Uncle;
