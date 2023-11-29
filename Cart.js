import axios from "axios";
import React, { useEffect, useState } from "react";
import jsonfile from "./Registration.json";
import "./style.css";

export default function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/cart").then((response) => {
      setData(response.data);
    }, []);
  });

  const deleteProduct = (id) => {
    axios.delete("http://localhost:3000/cart/" + id);
  };

  function emptyCart() {
    if (jsonfile.cart.length === 0) {
      alert("Cart is empty");
       window.location.href="/ContactHome";
    } else {
      window.location.href="/cart/order";
    }
  }

  var price = 0;
  data.forEach((item) => {
    price = price + item.product_price;
    localStorage.setItem("price", price);
  });
  const datas = data.map((product) => {
    return (
      <div>
        <div className="product-card">
          <img
            src={product.thump}
            alt="Product Thumbnail"
            className="product-image"
          />
          <div className="product-details">
            <p className="product-price">{product.currency}</p>
            <p className="product-quantity">Quantity: {product.quantity}</p>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="posi">
      <div>{datas}</div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul className="product-list">
          {data.map((product) => (
            <li key={product.id} className="product-item">
              <img
                src={product.thump}
                alt="Product Thumbnail"
                className="product-image"
              />
              <div className="product-details">
                <p>{product.currency}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-price">Total Price: Rs.{price}</div>
        <button onClick={()=>emptyCart()} className="order-button">
          ORDER
        </button>
      </div>
    </div>
  );
}
