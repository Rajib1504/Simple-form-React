import { useRef } from "react";

const RefFrom = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef(); // for get refference
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="bg-green-300 flex flex-col justify-center items-center"
      >
        <input type="text" name="name" ref={nameRef} placeholder="Name" />
        <br />
        <input
          type="email"
          name="email"
          ref={emailRef}
          className="border-2
        "
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          ref={passRef}
          placeholder="password"
        />
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

export default RefFrom;
