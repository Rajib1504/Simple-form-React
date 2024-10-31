import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
  const asset = "DimondRing";
  const AssetContext = createContext("Dimond");
  return (
    <div className="text-xl border-2 border-yellow-300 p-3  rounded-lg mx-auto text-center ">
      <h1 className="text-3xl">Grand Pa</h1>
      <div className="flex gap-2  flex-row justify-center items-center ">
        <AssetContext.Provider value="Dimond">
          <Dad asset={asset}></Dad>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </AssetContext.Provider>
      </div>
    </div>
  );
};

export default Grandpa;
