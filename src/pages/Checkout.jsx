import React, { useState, useContext, useEffect } from "react";
import logo from "../data/LOGO.png";
import { CountryDropdown } from "react-country-region-selector";
import SquareCheckbox from "../components/RadioButton";
import { CartContext } from "../contexts/CartContext";
import { useLocation } from "react-router";

function Checkout() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const { cart, quantity, totalPrice } = location.state || {
    cart: [],
    quantity: [],
    totalPrice: 0,
  };

  return (
    <div className="flex justify-between relative">
      <div className="w-1/2 flex flex-col pl-32 py-20">
        <img src={logo} className="h-10 w-1/3" alt="Logo" />
        <h2 className="my-10">Checkout Details</h2>
        <div className="pt-5">
          <h3>Contact</h3>
          <input
            type="text"
            className="border mt-5 border-gray-300 w-full p-5 rounded my-2"
            placeholder="Email or mobile phone number"
          />
        </div>
        <div className="pt-5">
          <h3>Delivery</h3>
          <label
            htmlFor=""
            className="absolute mt-[24px] text-xs text-gray-400 ml-6"
          >
            Country/region
          </label>
          <CountryDropdown
            className="border mt-5 border-gray-300 bg-white w-full p-5 rounded my-2"
            value={selectedCountry}
            onChange={(val) => setSelectedCountry(val)}
            placeholder="Select a country"
          />
          <div className="flex justify-between">
            <input
              type="text"
              className="border mt-5 border-gray-300 w-6/12 p-5 rounded my-2"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border mt-5 border-gray-300 w-6/12 ml-4 p-5 rounded my-2"
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            className="border mt-5 border-gray-300 w-full p-5 rounded my-2"
            placeholder="Address"
          />
          <input
            type="text"
            className="border mt-5 border-gray-300 w-full p-5 rounded my-2"
            placeholder="Appartment, suite, etc. (optional)"
          />
          <div className="flex justify-between">
            <input
              type="text"
              className="border mt-5 border-gray-300 w-6/12 p-5 rounded my-2"
              placeholder="City"
            />
            <input
              type="text"
              className="border mt-5 border-gray-300 w-6/12 ml-4 p-5 rounded my-2"
              placeholder="Postal Code"
            />
          </div>
          <div className="pt-5">
            <SquareCheckbox
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
        </div>
        <div className="mt-10">
          <h3>Shipping Method</h3>
          <select className="border mt-5 border-gray-300 bg-white w-full p-5 rounded my-2">
            <option value="">International</option>
            <option value="">Local</option>
          </select>
        </div>
        <div className="mt-5">
          <h3 className="my-5">Payment</h3>
          <span className="my-5 text-gray-400">
            All Transactions are secured and encrypted
          </span>

          <div className="mt-5">
            <div className="p-5 bg-blue-100 rounded-sm border border-blue-400">
              <h4>Credit Card</h4>
            </div>
            <div className="bg-gray-100 p-10 rounded">
              <input
                type="text"
                className="border mt-5 border-gray-300 w-full p-5 rounded my-2"
                placeholder="Card number"
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  className="border mt-5 border-gray-300 w-6/12 p-5 rounded my-2"
                  placeholder="Expiration date (MM/YY)"
                />
                <input
                  type="text"
                  className="border mt-5 border-gray-300 w-6/12 ml-4 p-5 rounded my-2"
                  placeholder="Security Code"
                />
              </div>
              <input
                type="text"
                className="border mt-5 border-gray-300 w-full p-5 rounded my-2"
                placeholder="Name on card"
              />
              <div className="pt-5">
                <SquareCheckbox
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </div>
            </div>
            <div className="mx-auto w-full mt-5">
              <button className="bg-blue-button p-5 text-white w-full rounded">
                Paynow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="w-1/2 ml-10 relative bg-gray-200 pt-32">
        <div className="p-5 rounded sticky top-10 w-4/5 mx-auto">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={item.productId}
                className="flex justify-between items-center mb-10 border pb-5 border-b-gray-300 "
              >
                <div className="p-3 bg-white">
                  <img
                    className="w-20 h-auto mr-2"
                    src={item.productImage}
                    alt={item.productName}
                  />
                </div>
                <div className="w-2/3 ml-5">
                  <h4>{item.productName}</h4>
                  <p className="text-gray-500">Price: ${item.productPrice}</p>
                </div>
                <div className="flex items-center">
                  <span className="ml-4 font-bold text-md">
                    ${item.productPrice * quantity[index]}.00
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          {cart.length > 0 && (
            <div className="mt-5 p-5 bg-gray-200 rounded">
              <div className="flex justify-between mb-10">
                <h4 className="font-bold">Sub Total: </h4>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-10">
                <h4 className="font-bold">Shipping: </h4>
                <span>$2.00</span>
              </div>
              <div className="flex justify-between border-t pt-5">
                <h4 className="font-bold">Total:</h4>
                <span>${(totalPrice + 20).toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
