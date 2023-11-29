import React, { Component } from "react";
import axios from "axios";

const cardNumberRegex = /^\d{16}$/;

const cardHolderRegex = /^[a-zA-Z\s]+$/;

const cvvRegex = /^\d{3}$/;

export class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        cardNumber: "",

        expiryMonth: "",

        expiryYear: "",

        cardHolder: "",

        cvv: "",
      },

      isError: {
        cardNumber: "",

        expiryMonth: "",

        expiryYear: "",

        cardHolder: "",

        cvv: "",
      },
    };

    this.formValChange = this.formValChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  formValChange = (event) => {
    const { name, value } = event.target;

    let isError = { ...this.state.isError };

    switch (name) {
      case "cardNumber":
        console.log(value);

        console.log(cardNumberRegex.test(value));

        isError.cardNumber = cardNumberRegex.test(value)
          ? ""
          : "At least 16 characters required";

        break;

      case "expiryMonth":
        isError.expiryMonth =
          value && !/^(0[1-9]|1[0-2])$/.test(value)
            ? "Please enter a valid month (01 - 12)"
            : "";

        break;

      case "expiryYear":
        const currentYear = new Date().getFullYear();

        isError.expiryYear =
          value && (!/^\d{4}$/.test(value) || value < currentYear)
            ? "Please enter a valid future year"
            : "";

        break;

      case "cardHolder":
        isError.cardHolder = cardHolderRegex.test(value)
          ? ""
          : "Please enter a valid card holder name(letters and spaces only)";

        break;

      case "cvv":
        isError.cvv = cvvRegex.test(value)
          ? ""
          : "Please enter a valid 3 - digit CVV number";

        break;

      default:
        break;
    }

    console.log(isError);

    this.setState((prevState) => ({
      isError,

      data: {
        ...prevState.data,

        [name]: value,
      },
    }));
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.isError.cardNumber !== "") {
      alert("Error in cardnumber");

      return;
    } else if (this.state.isError.expiryMonth !== "") {
      alert("Error in expiry month");

      return;
    } else if (this.state.isError.expiryYear !== "") {
      alert("Error in expiry year");

      return;
    } else if (this.state.isError.cardHolder !== "") {
      alert("Error in card holder name");

      return;
    } else if (this.state.isError.cvv !== "") {
      alert("Error in cvv");

      return;
    }

    this.addPaymentInfo();

    console.log(this.state);

    console.log("Form submitted");
  };

  formValid() {
    console.log("Checks for validation");

    const { isError, data } = this.state;

    console.log(isError);

    console.log(data);

    let isValid = true;

    Object.values(isError).forEach((val) => {
      if (val.length > 0) {
        console.log(val.length > 0);

        isValid = false;
      }
    });

    Object.values(data).forEach((val) => {
      if (val === "" || val === null) {
        console.log(val);

        isValid = false;
      }
    });

    return isValid;
  }

  addPaymentInfo() {
    axios

      .post("http://localhost:3000/payment", this.state.data)

      .then((response) => {
        console.log("Data inserted successfully");

        alert("Your Order placed Successfully");

        alert("Thankyou for shopping with us....");

        window.location.href = "/ContactHome";
      })

      .catch((error) => console.log(error));
  }

  onSubmit(event) {
    alert("Your Order placed Successfully");

    alert("Thankyou for shopping with us....");

    window.location.href = "/ContactHome";
  }

  //   render() {
  //     return (
  //       <div className="flex">
  //         <center></center>

  //         <div className="col-50 flex">
  //           <table>
  //             <center>
  //               <h1>Payment</h1>
  //             </center>

  //             <tr>
  //               <td>Accepted Cards</td>
  //             </tr>

  //             <tr>
  //               <div class="icon-container">
  //                 <i>
  //                   <FaCcVisa color="navy" />
  //                 </i>

  //                 <i>
  //                   <FaCcMastercard color="red" />
  //                 </i>
  //               </div>
  //             </tr>

  //             <tr>
  //               <label className="labelp" for="cname">
  //                 Name on Card
  //               </label>

  //               <input
  //                 className="inputp"
  //                 type="text"
  //                 id="cname"
  //                 name="cardname"
  //                 placeholder="John More Doe"
  //               />

  //               <label className="labelp" for="ccnum">
  //                 Credit card number
  //               </label>

  //               <input
  //                 className="inputp"
  //                 type="text"
  //                 id="ccnum"
  //                 name="cardnumber"
  //                 placeholder="1111-2222-3333-4444"
  //               />

  //               <label className="labelp" for="expmonth">
  //                 Exp Month
  //               </label>

  //               <input
  //                 type="text"
  //                 id="expmonth"
  //                 name="expmonth"
  //                 placeholder="September"
  //               />
  //             </tr>

  //             <tr>
  //               <div class="row">
  //                 <div className="col-50">
  //                   <label className="labelp" for="expyear">
  //                     Exp Year
  //                   </label>

  //                   <input
  //                     type="text"
  //                     id="expyear"
  //                     name="expyear"
  //                     placeholder="2018"
  //                   />
  //                 </div>

  //                 <div className="col-50">
  //                   <label className="labelp" for="cvv">
  //                     CVV
  //                   </label>

  //                   <input type="text" id="cvv" name="cvv" placeholder="352" />
  //                 </div>
  //               </div>
  //             </tr>

  //             <tr>
  //               <button
  //                 type="submit"
  //                 value="Continue to checkout"
  //                 onClick={(event) => this.onSubmit(event)}
  //               >
  //                 Continue to checkout
  //               </button>
  //             </tr>
  //           </table>

  //           <div className="row1">
  //             <div className="col-75">
  //               <div className="container1">
  //                 <form>
  //                   <div className="row">
  //                     <div className="col-50">
  //                       <h3>Order Details</h3>

  //                       <table>
  //                         <tr>
  //                           <td>Items:</td>
  //                           <td>{this.state.items}</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Sub Total:</td>
  //                           <td>₹{this.state.order}</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Shipping:</td>
  //                           <td>₹50</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Amout Payable:</td>
  //                           <td>₹{this.state.total}</td>
  //                         </tr>
  //                       </table>

  //                       <div style={{ color: "green" }}>
  //                         <center> Ships in within 4-6 days</center>
  //                       </div>
  //                     </div>

  //                     <div className="col-50">
  //                       <h3>Shipping Address</h3>

  //                       <table>
  //                         <tr>
  //                           <td>State:</td>
  //                           <td>{this.state.state}</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Street:</td>
  //                           <td>{this.state.street}</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Pin:</td>
  //                           <td>{this.state.pin}</td>
  //                         </tr>

  //                         <tr>
  //                           <td>Phone:</td>
  //                           <td>{this.state.phone}</td>
  //                         </tr>
  //                       </table>

  //                       <label className="labelp">
  //                         <input type="checkbox" /> Shipping address same as
  //                         billing
  //                       </label>
  //                     </div>
  //                   </div>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  render() {
    return (
      <div>
        <div className="">
          <h1>Payment</h1>
          <h3>ENTER YOUR CARD DETAILS</h3>

          <form onSubmit={this.onFormSubmit}>
            Card Number :
            <input
              type="text"
              name="cardNumber"
              value={this.state.data.cardNumber}
              onChange={this.formValChange}
              placeholder="CARD NUMBER"
              required
            />
            <p className="error">{this.state.isError.cardNumber}</p>
            Expiry Month:
            <input
              type="number"
              name="expiryMonth"
              value={this.state.data.expiryMonth}
              onChange={this.formValChange}
              placeholder="MONTH"
              required
            />
            <p className="error">{this.state.isError.expiryMonth}</p>
            Expiry Year :
            <input
              type="number"
              name="expiryYear"
              value={this.state.data.expiryYear}
              onChange={this.formValChange}
              placeholder="YEAR"
              required
            />
            <p className="error">{this.state.isError.expiryYear}</p>
            Name:
            <input
              type="text"
              name="cardHolder"
              value={this.state.data.cardHolder}
              onChange={this.formValChange}
              placeholder="CARD HOLDER"
              required
            />
            <p className="error">{this.state.isError.cardHolder}</p>
            CVV Number :
            <input
              type="text"
              name="cvv"
              value={this.state.data.cvv}
              onChange={this.formValChange}
              placeholder="CVV SECURITY CODE"
              required
            />
            <p className="error">{this.state.isError.cvv}</p>
            <button className="continue" type="submit">
              Proceed
            </button>
            <div></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Payment;
