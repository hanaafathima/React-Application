import axios from "axios";

import { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState(null);

  const [email, setEmail] = useState(null);

  const [pass, setPass] = useState(null);

  const navigate = useNavigate();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleInput1 = (event) => {
    setEmail(event.target.value);
  };

  const handleInput2 = (event) => {
    setPass(event.target.value);
  };

  const storeUserData = () => {
    const regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    const regname = /^[a-zA-Z\-]{4,20}$/;

    const regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (name != null && email != null && pass != null) {
      if (regname.test(name)) {
        if (regemail.test(email)) {
          if (regpass.test(pass)) {
            axios({
              method: "post",

              url: "http://localhost:3000/Registration",

              data: {
                name: name,

                email: email,

                password: pass,
              },
            }).catch((error) => {
              alert("Something went Wrong Loging in you as guest");
            });

            navigate("/SignUp");
          } else {
            alert(
              "Password should contain minimum 8 characters, with alphabets and numbers "
            );
          }
        } else {
          alert("Please Enter a Valid Email");
        }
      } else {
        alert("Please Enter Valid Name");
      }
    } else {
      alert("Please Enter Complete Data");
    }
  };

  return (
    <div>
      <div className="top">
        <div className="hololo">
          <div className="newsign">
            <div className="cov">
              <div className="logopng"></div>
            </div>

            <div className="signnew">
              <h3 className="signinn"> Sign Up</h3>
            </div>

            <div>
              <input
                onChange={handleInput}
                className="inputs"
                placeholder="Name"
              ></input>
            </div>

            <div>
              <input
                onChange={handleInput1}
                type="text"
                className="inputs"
                placeholder="Email"
              ></input>
            </div>

            <div>
              <input
                onChange={handleInput2}
                type="password"
                className="inputs1"
                placeholder="Password"
              ></input>
            </div>

            <div>
              <label onClick={storeUserData} className="signinbut">
                {" "}
                Sign Up
              </label>
            </div>

            <center>
              <div>
                <Link to="/Login">
                  <h3> Already have an account? </h3> <h1>Login</h1>
                </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
