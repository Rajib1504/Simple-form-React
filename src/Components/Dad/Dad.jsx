import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
const Dad = () => {
  return (
    <div className="text-xl border-2 border-yellow-300  rounded-lg p-6">
      <h1 className="text-2xl">Dad</h1>
      <div className="flex gap-2 justify-center my-2">
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Dad;
