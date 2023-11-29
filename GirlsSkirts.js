import React from "react";
// import { Cartcontext } from "./context/Context";
import SkirtGirl from "./SkirtGirl";
import "./style.css";
import axios from "axios";
// import { FaShoppingCart } from "react-icons/fa";

function GirlsSkirts() {
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
  const ProductItems = SkirtGirl.map((item) => (
    <div className="flex" key={item.id}>
      <div className="cont">
        <div className="flex">
          <img className="pic" src={item.thump} width="auto" height="250px" />
          <div className="overlay">
            <div className="flex">
              <div>{item.currency}</div> <br></br>
            </div>
            <div align="center">
              <button className="btns" onClick={() => addtoCart(item)}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className="flex"> {ProductItems}</div>;
}

export default GirlsSkirts;
