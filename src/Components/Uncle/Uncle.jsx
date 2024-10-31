import Tania from "../Cousin/Tania";
import Rajesh from "../Rajesh";

const Uncle = () => {
  return (
    <div className="text-xl border-2 border-yellow-300  rounded-lg p-6">
      <h1 className="text-2xl"> Uncle</h1>
      <div className="flex gap-3 justify-center">
        <Rajesh></Rajesh>
        <Tania></Tania>
      </div>
    </div>
  );
};

export default Uncle;
