import { useContext } from "react";
import Rehan from "../Cousin-2/Rehan";
import Umaiya from "../Cousin-3/umaiya";
import { MoneyContext } from "../grandPa/Grandpa";
const Aunty = () => {
  const [coin, setCoin] = useContext(MoneyContext);
  return (
    <div className="text-xl border-2 border-yellow-300  rounded-lg p-6">
      <h1 className="text-2xl">Aunty</h1>
      <div className="flex gap-2 justify-center">
        <Rehan></Rehan>
        <Umaiya></Umaiya>
      </div>
      <p>has:{coin}</p>
      <button
        onClick={() => {
          setCoin(coin + 1000);
        }}
        className="border-2 border-yellow-300 "
      >
        Add money (1000)
      </button>
    </div>
  );
};

export default Aunty;
