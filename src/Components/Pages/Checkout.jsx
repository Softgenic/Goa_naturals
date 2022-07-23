import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import "./css/Checkout.css";

const Checkout = () => {
  const [items, setItems] = useState([]);
  const [shipping, setShipping] = useState(100);
  const [cgst, setCgst] = useState(26.68);
  const [sgst, setSgst] = useState(26.68);

  const getSubTotal = () => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += item.price * item.number;
    });
    return subtotal;
  };
  return (
    <>
      <NavbarMenu />
      <div className="checkout-container">
        <div className="billing-details-container">
          <h1>Billing Details</h1>
          <div className="form-item">
            <label htmlFor="full-name">Full name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="House number and street name"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Your city" required />
          </div>
          <div className="form-item">
            <label htmlFor="state">State</label>
            <select id="state" required>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="zipcode">Postcode/ZIP</label>
            <input
              type="text"
              id="zip"
              placeholder="Enter your zip code"
              required
            />
          </div>
          <div className="contact-container">
            <div className="form-item">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="password">Create account password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
        </div>
        <div className="different-address-container">
          <div className="different-address-heading">
            <input type="checkbox" id="ship-to-different" />
            <h2>Ship to a different address?</h2>
          </div>
          <div className="form-item">
            <label htmlFor="full-name2">Full Name</label>
            <input
              type="text"
              id="full-name2"
              required
              placeholder="Your full name"
            />
          </div>
          <div className="form-item">
            <label htmlFor="address2">Address</label>
            <input
              type="text"
              id="address2"
              placeholder="House number and street name"
            />
          </div>
          <div className="form-item">
            <label htmlFor="city2">City .*</label>
            <input type="text" id="city2" placeholder="Your city" required />
          </div>
          <div className="form-item">
            <label htmlFor="state2">State .*</label>
            <select name="state2" id="state2">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="form-item">
            <label htmlFor="zip2">Postcode/ZIP .*</label>
            <input type="text" id="zip2" />
          </div>
          <div className="form-item">
            <label htmlFor="order-notes">Order Notes (optional)</label>
            <textarea
              name="order-notes"
              id="order-notes"
              cols="10"
              rows="4"
              placeholder="Notes about your order, eg special notes for delivery"
            ></textarea>
          </div>
        </div>
        <div className="your-order">
          <table className="your-order-table">
            <thead>
              <td>Product</td>
              <td>Subtotal</td>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr data-id={index}>
                    <td>
                      {item.name} - {item.quantity} x {item.number}
                    </td>
                    <td>{item.price * item.number} (incl. VAT)</td>
                  </tr>
                );
              })}
              <tr>
                <td>Subtotal</td>
                <td>{getSubTotal()} (incl. VAT)</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Shipping: Rs. {shipping}.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>
                  Rs. {getSubTotal() + shipping} (includes Rs. {cgst} CGST, Rs.{" "}
                  {sgst} SGST)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Checkout;
