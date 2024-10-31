import "./App.css";
import Grandpa from "./Components/grandPa/Grandpa";
// import ReusableHooks from "./Components/ReusableHooks/ReusableHooks";
// import HooksForm from "./Components/HooksForm/HooksForm";
// import RefFrom from "./Components/RefForm/RefFrom";
// import StateForm from "./Components/StateForm/StateForm";
// import Simpleform from "./Components/Simpleform/Simpleform";

function App() {
  // const handelSubmitForProfileUpdate = (data) => {
  //   console.log("profile data :", data);
  // };
  // const handelSubmitFprSaveData = (data) => {
  //   console.log("Save data :", data);
  // };
  return (
    <div>
      {/* <Simpleform></Simpleform> */}
      {/* <StateForm></StateForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HooksForm></HooksForm> */}
      {/* <ReusableHooks
        title={"Profile update"}
        handelSubmit={handelSubmitForProfileUpdate}
      >
        {" "}
        <h2 className="text-2xl font-bold text-center my-2">Profile update</h2>
        <p className="text-center">keep your profile updated</p>
      </ReusableHooks> */}
      {/* <ReusableHooks
        title={"sign up"}
        Submit={"Save Data"}
        handelSubmit={handelSubmitFprSaveData}
      >
        <h2 className="text-2xl font-bold text-center my-2">Save data</h2>
        <p className="text-center">save your data after your work</p>
      </ReusableHooks> */}
      <div className="w-fit mt-4 mx-auto">
        <Grandpa></Grandpa>
      </div>
    </div>
  );
}

export default App;
