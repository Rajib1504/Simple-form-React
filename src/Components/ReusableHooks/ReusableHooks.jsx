const ReusableHooks = ({
  title,
  Submit = "Submit",
  handelSubmit,
  children,
}) => {
  //we save as a default value
  const handelLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
    };
    handelSubmit(data);
  };
  return (
    <div className="bg-green-300">
      {/* <h3 className="text-2xl font-bold text-center my-2">{title}</h3> */}
      {children}
      <form
        onSubmit={handelLocalSubmit}
        className=" flex flex-col justify-center items-center"
      >
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input
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
          value={Submit}
          className="border-2 p-2 rounded-sm"
        />
      </form>
    </div>
  );
};

export default ReusableHooks;
