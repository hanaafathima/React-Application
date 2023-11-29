import React from "react";
// import { Cartcontext } from "./context/Context";
import EthnicGirl from "./EthnicGirl";
import "./style.css";
import axios from "axios";
// import { FaShoppingCart } from "react-icons/fa";

function GirlsEthnic() {
  const addtoCart = (item) => {
    axios({
      method: "post",
      url: "http://localhost:3000/cart",
      data: {
        currency: item.currency,
        product_price: item.product_price,
        quantity: item.quantity,
        thump: item.thump,
      },
    });
  };

  const ProductItems = EthnicGirl.map((item) => (
    <div className="flex" key={item.id}>
      <div className="flex">
        <div className="cont">
          <img className="pic" src={item.thump} width="auto" height="250px" />
          <div className="overlay">
            <div className="flex">
              <div>{item.currency}</div> <br></br>
            </div>
            <div align="center">
              <button className="btns" onClick={() => addtoCart(item)}>
                TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className="flex"> {ProductItems}</div>;
}
export default GirlsEthnic;
