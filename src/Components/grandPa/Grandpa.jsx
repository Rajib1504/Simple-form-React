import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
  return (
    <div className="text-xl border-2 border-yellow-300 p-3  rounded-lg mx-auto text-center ">
      <h1 className="text-3xl">Grand Pa</h1>
      <div className="flex gap-2 rounded-lg flex-row justify-center items-center rounded-lg">
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </div>
    </div>
  );
};

export default Grandpa;
