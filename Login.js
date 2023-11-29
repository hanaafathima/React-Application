// import ContactHome from "./ContactHome";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setuser] = useState([]);
  const Navigate = useNavigate();
  const errors = {
    email: "invalid email",
    password: "invalid password",
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/Registration")
      .then((response) => response.data)
      .then(
        (result) => {
          setuser(result);
        },
        (error) => {
          setuser(null);
        }
      );
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, password } = document.forms[0];
    const userData = user.find((user) => user.email === email.value);
    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
        alert("User is successfully logged in");
        Navigate("/ContactHome");
        window.location.reload();
        localStorage.setItem("loggedin", true);

        localStorage.setItem("username", userData.name);

        localStorage.setItem("useremail", userData.email);
      }
    } else {
      setErrorMessages({ name: "email", message: errors.email });
      localStorage.setItem("loggedin", false);

      localStorage.setItem("user", "");
    }
  };
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  const renderForm = (
    <center>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email </label>
            <br />
            <input type="text" name="email" required />
            {renderErrorMessage("email")}
          </div>
          <div>
            <label>Password </label>
            <br />
            <input type="password" name="password" required />
            {renderErrorMessage("password")}
          </div>
          <div>
            <br />
            <input type="submit" value="Login" />
            <br></br>
            <div>
              <nav>
                <Link to="SignUp">
                  <h3> Don't have an account? </h3> <h2>SignUp</h2>
                </Link>
              </nav>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
  return (
    <div className="signup">
      <div>
        <center>
          <h1>Login</h1>
        </center>
        {isSubmitted ? "" : renderForm}
      </div>
    </div>
  );
}
export default Login;
