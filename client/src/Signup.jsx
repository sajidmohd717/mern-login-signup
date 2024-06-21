import React, { useState } from "react";
import axios from 'axios'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async e => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <>
      <form method="POST" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default Signup;
