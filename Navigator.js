import { React, Component } from "react";
import * as Icons from "react-icons/bs";
import { Link } from "react-router-dom";
import carts from "./Registration.json";
import "./style.css";
class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.state = {
      log: localStorage.getItem("loggedin"),
      user: "Hi," + localStorage.getItem("username"),
    };
  }

  logout() {
    localStorage.setItem("loggedin", false);

    localStorage.setItem("username", "Welcome");

    localStorage.setItem("useremail", "");

    this.setState({
      log: localStorage.getItem("loggedin"),
    });

    window.location.reload();
  }
  render() {
    var cart = 0;

    carts.cart.forEach((item) => {
      cart = cart+1;
    });

    let logout, user;

   
    if (localStorage.getItem("loggedin") === "true") {
      logout = <div onClick={() => this.logout()}>Logout</div>;
      cart = (
        <sup style={{ backgroundColor: "red", color: "white" }}>
          <b>{cart}</b>
        </sup>
      );
    } else {
      user = "Welcome";

      cart = (
        <sup style={{ backgroundColor: "red", color: "white" }}>
          <b>0</b>
        </sup>
      );

      logout = <Link to="Login">Login</Link>;
    }

    return (
      <div>
        <nav className="navStyle">
          <div className="logo"></div>
          <ul className="navLink">
            <Link to="ContactHome">
              {" "}
              <li> Home </li>{" "}
            </Link>

            <div className="dropdown">
              <Link to="KidBoys">
                {" "}
                <li> Boys </li>{" "}
              </Link>
              <div className="dropdown-content">
                <Link to="BoysTshirts">
                  {" "}
                  <li> Tshirts and Shorts </li>{" "}
                </Link>
                <Link to="BoysEthnic">
                  {" "}
                  <li> Ethnic Wears </li>{" "}
                </Link>
                <Link to="BoysShirts">
                  {" "}
                  <li> Shirts </li>{" "}
                </Link>
                <Link to="BoysJeans">
                  {" "}
                  <li>Jeans and Pants</li>{" "}
                </Link>
              </div>
            </div>
            <div className="dropdown">
              <Link to="KidGirls">
                {" "}
                <li> Girls </li>{" "}
              </Link>
              <div className="dropdown-content">
                <Link to="GirlsSkirts">
                  {" "}
                  <li> Skirts </li>{" "}
                </Link>
                <Link to="GirlsEthnic">
                  {" "}
                  <li> Ethnic Wears </li>{" "}
                </Link>
                <Link to="GirlsTops">
                  {" "}
                  <li> Tshirts and Tops </li>{" "}
                </Link>
                <Link to="GirlsJeans">
                  {" "}
                  <li> Jeans and Pants </li>{" "}
                </Link>
              </div>
            </div>

            <Link to="Contact">
              {" "}
              <li> Contact </li>{" "}
            </Link>

            <div className="dropdown">
              <button className="dropbtn">
                <nav className="navStyle">
                  <h1>
                    {this.state.user}

                    <i></i>
                  </h1>
                </nav>
              </button>

              <div className="dropdown-content">
                <h2>{logout}</h2>
              </div>
            </div>

            <Link to="Cart">
              {" "}
              <li>
                {" "}
                <Icons.BsCart3 /> Cart{cart}
              </li>{" "}
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigator;
