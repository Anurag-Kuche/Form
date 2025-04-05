import React from "react";

const Login = () => {
  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button className="btn disabled">Login</button>
    </div>
  );
};

export default Login;
