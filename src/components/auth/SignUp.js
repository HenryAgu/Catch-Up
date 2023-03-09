import React, { useState } from "react";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const fnameHandler = (e) => {
    setFname(e.target.value);
  };

  const lnameHandler = (e) => {
    setLname(e.target.value);
  };

  const submitHandler = (e) => {
    console.log(
      `Email: ${email} \nPassword : ${password} \nFirst Name: ${fname} \nLast Name: ${fname}`
    );
    e.preventDefault();
  };
  return (
    <div className="sign_in">
      <form onSubmit={submitHandler}>
        <h5>Sign Up</h5>
        <div className="input_field">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" value={fname} onChange={fnameHandler} />
        </div>
        <div className="input_field">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" value={lname} onChange={lnameHandler} />
        </div>
        <div className="input_field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className="input_field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <div className="input_field">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
