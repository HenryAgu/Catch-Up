import React, { useState } from 'react'
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const emailHandler = (e) =>{
    setEmail(e.target.value)
  }
  
  const passwordHandler = (e) =>{
    setPassword(e.target.value)
  }
  const submitHandler = (e) =>{
    console.log(`Email: ${email} \nPassword : ${password}`)
    e.preventDefault();
  }
  return (
    <div className='sign_in'>
      <form onSubmit={submitHandler}>
          <h5>Sign In</h5>
          <div className="input_field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={emailHandler}/>
          </div>
          <div className="input_field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={passwordHandler}/>
          </div>
          <div className="input_field">
            <button>Login</button>
          </div>
      </form>
    </div>
  )
}

export default SignIn