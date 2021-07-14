import "./loginPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginPage">
      <h3>Log In to your account</h3>
      <form>
        <input type="text" placeholder="Email"></input>
        <br />
        <input type="password" placeholder="Password"></input>
        <br />
        <p>
          Don't have an account yet? Click <Link to="/createaccount">here</Link>{" "}
          to get started!
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
