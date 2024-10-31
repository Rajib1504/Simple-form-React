import useInput from "../../Hooks/useInput";
// import useInput from "../../Hooks/useInput";

const HooksForm = () => {
  //   const [name, handelChange] = useInput("rajoni"); //state declearing

  const emailstate = useInput("rojonikaka@gmial.go"); //inside this emailstate there are 2 vlue one is vlaue another one is one handler
  const handelSubmit = (e) => {
    e.preventDefault();
    //     console.log(name);
    console.log(emailstate.value);
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="bg-green-300 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          //     value={name}
          name="name"
          //     onChange={handelChange}
          placeholder="Name"
        />
        <br />
        <input
          {...emailstate}
          type="email"
          name="email"
          className="border-2
        "
          placeholder="email"
        />
        <br />
        <input type="number" name="number" id="" placeholder="number" />
        <br />
        <input
          type="submit"
          value="Submit"
          className="border-2 p-2 rounded-sm"
        />
      </form>
    </div>
  );
};

export default HooksForm;
