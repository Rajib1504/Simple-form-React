import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("Dimond");
export const MoneyContext = createContext(1000);
export const ReduceContext = createContext(5000);
const Grandpa = () => {
  const asset = "DimondRing";
  const [coin, setCoin] = useState(1000);
  const [money, setMoney] = useState(5000);
  return (
    <div className="text-xl border-2 border-yellow-300 p-3  rounded-lg mx-auto text-center ">
      <MoneyContext.Provider value={[coin, setCoin]}>
        <ReduceContext.Provider value={[money, setMoney]}>
          <h1 className="text-3xl">Grand Pa</h1>
          <p>{coin}</p>
          <div className="flex gap-2  flex-row justify-center items-center ">
            <AssetContext.Provider value="Dimondg">
              <Dad asset={asset}></Dad>
              <Uncle></Uncle>
              <Aunty></Aunty>
            </AssetContext.Provider>
          </div>
        </ReduceContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
//1. create a context and export it
//2. add provider fot the context with the value.value could be anything
// /3.import and the use useContext (contextApi)
