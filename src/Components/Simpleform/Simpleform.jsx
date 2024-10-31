const Simpleform = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log("submited");
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.number.value);
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="bg-green-300 flex flex-col justify-center items-center"
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
          value="Submit"
          className="border-2 p-2 rounded-sm"
        />
      </form>
    </div>
  );
};

export default Simpleform;
