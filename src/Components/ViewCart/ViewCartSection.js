import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Store } from "../../utils/Store";
// import { FaWindowClose } from "react-icons/fa";

import "./ViewCart.css";
const ViewCartSection = () => {
  const { state, dispatch } = useContext(Store);

  console.log("cart data", state);
  let totalPrice = state?.cart?.cartItems?.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );

  const onRemove = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const onMinus = (product) => {
    const quantity = product.quantity - 1;

    if (quantity < 1) {
      window.alert("quantity should not be less than 1");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  const onAdd = (product) => {
    const quantity = product.quantity + 1;

    if (product.stock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };
  const onQuantityChange = async ({ product, quantity }) => {
    if (parseInt(product.stock) < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    if (quantity < 1) {
      window.alert("quantity should not be less than 1");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <Container fluid>
      <section class="h-100" className="sec">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
                className="heading"
              >
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>
              {state?.cart?.cartItems?.map((item, index) => {
                return (
                  <div class="card rounded-3 mb-4">
                    <div class="card-body p-4">
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={`https://golden.softgenics.in/uploads/${item.image}`}
                            class="img-fluid rounded-3"
                            alt={item.image}
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p class="lead fw-normal mb-2">{item.p_name}</p>
                          <p>
                            <span class="text-muted">Weight: </span>
                            {item.waight}{" "}
                            {/* <span class="text-muted">Category: </span>
                          {item.category} */}
                          </p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            class="btn btn-link px-2"
                            onClick={() => onMinus(item)}
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <input
                            id={`quantity ${index}`}
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => {
                              onQuantityChange({
                                product: item,
                                quantity: e.target.value,
                              });
                            }}
                            type="number"
                            class="form-control form-control-sm"
                          />

                          <button
                            class="btn btn-link px-2"
                            onClick={() => onAdd(item)}
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 class="mb-0">₹{item.price * item.quantity}</h5>
                        </div>
                        <div
                          class="col-md-1 col-lg-1 col-xl-1 text-end"
                          onClick={() => onRemove(item)}
                        >
                          <a class="text-danger">
                            <i class="fas fa-trash fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div class="card mb-4">
                <div class="card-body p-4 d-flex flex-row">
                  <div class="form-outline flex-fill">
                    <input
                      type="text"
                      id="form1"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1">
                      Discound code
                    </label>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-warning btn-lg ms-3"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <button
                    type="button"
                    class="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ViewCartSection;
