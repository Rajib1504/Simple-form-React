import { useState } from "react";

const StateForm = () => {
  const [email, setEmail] = useState(null);
  const [name, setname] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handelfrom = (e) => {
    e.preventDefault();
    if (error.length < 6) {
      setError("Password must not be less then 6");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };
  // name seting handler
  const handelToSetName = (e) => {
    setname(e.target.value);
  };
  const handeltoSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handeltoSetPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handelfrom}
        className="bg-green-200 flex flex-col justify-center items-center"
      >
        <input
          type="text"
          onChange={handelToSetName}
          name="name"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handeltoSetEmail}
          className="border-2"
          placeholder="email"
        />
        <br />
        <input
          type="password"
          onChange={handeltoSetPassword}
          name="password"
          id=""
          required
          placeholder="password"
        />
        <br />
        <input
          type="submit"
          value="Submit"
          className="border-2 p-2 rounded-sm"
        />
        {error && <p>{error}</p>} {/* error handeling  */}
      </form>
    </div>
  );
};

export default StateForm;
