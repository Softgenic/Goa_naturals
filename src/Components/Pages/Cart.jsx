import React, { useState } from "react";
import "./css/Cart.css";
import image1 from "../Assets/images/benefits1.png";
import CloseButton from "react-bootstrap/CloseButton";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import Footer from "../Footer/Footer"
const Cart = (props) => {
  const [total, setTotal] = useState(350);
  const [shippingState, setShippingState] = useState("Jharkhand");
  const [shippingCost, setShipping] = useState(100);
  const [cgst, setCgst] = useState(10);
  const [sgst, setSgst] = useState(10);
  return (
    <>
      <NavbarMenu />
      <div className="cart-container">
        <div className="banner-container">
          <div className="banner">
            {total < 800 ? (
              <p className="banner-text">
                Your current order total is Rs {total}, you must have an order
                with a minimum of Rs 800 to place your order.
              </p>
            ) : (
              <p>Your current order total is Rs {total}</p>
            )}
          </div>
        </div>
        <table className="table">
          <thead className="table-header">
            <td>
              <p>Product Image</p>
            </td>
            <td>
              <p>Product Name</p>
            </td>
            <td>
              <p>Price</p>
            </td>
            <td>
              <p>Quantity</p>
            </td>
            <td>
              <p>Subtotal</p>
            </td>
          </thead>

          <tbody>
            {" "}
            <tr className="table-row visible">
              <td className="close-container">
                <CloseButton />
              </td>
              <td>
                <img src={image1} alt="" className="table-row-img" />
              </td>
              <td>
                <p className="table-row-price">Rs {200}</p>
              </td>
              <td>
                <p className="table-row-quantity">
                  <button class="quantity-btn" data-quantity-minus="">
                    <svg viewBox="0 0 409.6 409.6">
                      <g>
                        <g>
                          <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <input
                    type="number"
                    class="quantity-input"
                    data-quantity-target=""
                    value="1"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                  />
                  <button class="quantity-btn" data-quantity-plus="">
                    <svg viewBox="0 0 426.66667 426.66667">
                      <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                    </svg>
                  </button>
                </p>
              </td>
              <td>
                <p className="table-row-subtotal">Rs {200}</p>
              </td>
            </tr>
            <tr className="table-row visible">
              <td className="close-container">
                <CloseButton />
              </td>
              <td>
                <img src={image1} alt="" className="table-row-img" />
              </td>
              <td>
                <p className="table-row-price">Rs {200}</p>
              </td>
              <td>
                <p className="table-row-quantity">
                  <button class="quantity-btn" data-quantity-minus="">
                    <svg viewBox="0 0 409.6 409.6">
                      <g>
                        <g>
                          <path d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467 c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z" />
                        </g>
                      </g>
                    </svg>
                  </button>
                  <input
                    type="number"
                    class="quantity-input"
                    data-quantity-target=""
                    value="1"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                  />
                  <button class="quantity-btn" data-quantity-plus="">
                    <svg viewBox="0 0 426.66667 426.66667">
                      <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                    </svg>
                  </button>
                </p>
              </td>
              
              <td>
                <p className="table-row-subtotal">Rs {200}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="coupon-row">
          <input
            type="text"
            name="coupon-code"
            id="coupon-code"
            placeholder="Enter coupon"
          />
          <button className="apply-coupon-btn">Apply Coupon</button>
          <button className="update-cart-btn">Update Cart</button>
        </div>

        <div className="cart-total-container">
          <h2>CART TOTAL</h2>
          <div className="total-row">
            <p className="total-row-para-1">Subtotal</p>
            <p>Rs {total} (incl. GST and VAT)</p>
          </div>
          <div className="total-row">
            <p className="total-row-para-1">Shipping</p>
            <div className="shipping-text">
              <p>Shipping Rs{shippingCost ? shippingCost : 0}</p>
              <p>Shipping to {shippingState}</p>
            </div>
          </div>
          <div className="total-row">
            <p className="total-row-para-1">Total</p>
            <p>
              Rs {total + shippingCost} includes Rs {cgst} CGST and Rs {sgst}{" "}
              SGST
            </p>
          </div>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
        {/* table container */}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
