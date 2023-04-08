import React, { useContext, useEffect, useState } from "react";
import data from "./Data";
import { BsFillTrashFill } from "react-icons/bs";
import { ShopContext } from "./Context/UseContext";
import "./styles.css";
const CartStructure = () => {
  return (
    <>
      <h1 className="cart-heading">My Cart</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h3>Mobile</h3>
          </div>
          <div class="col">
            <h3>Name</h3>
          </div>
          <div class="col price">
            <h3>Price</h3>
          </div>
          <div class="col">
            <h3>Quantity</h3>
          </div>
          <div class="col">
            <h3> Total Price</h3>
          </div>
          <div class="col remove">
            <h3>Remove</h3>
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
};

const Cart = (props) => {
  const { addToCart, cartitems, remove, total } = useContext(ShopContext);
  const totalamt = total();

  const Delete = (val, ind) => {
    var update = props.inp.filter((event) => event !== val);
    cartitems[val] = 0;
    total();

    props.setinp(update);
  };
  if (props.inp.length === 0) {
    return (
      <>
        <h1 className="cart-heading">My Cart (Empty)</h1>
      </>
    );
  }
  return (
    <>
      <CartStructure />
      {props.inp.map((val, ind) => {
        return (
          <>
            <div class="container text-center main-div">
              <div class="row">
                <div class="col">
                  <img src={data[val].imgsrc} />
                </div>
                <div class="col">
                  <h4>{data[val].name}</h4>
                </div>
                <div class="col price">
                  <h4>{data[val].price}</h4>
                </div>
                <div class="col button-wrap">
                  <button
                    name="dec"
                    className="cart-btn"
                    onClick={() => {
                      remove(val);
                      if (cartitems[val] < 2) {
                        Delete(val);
                      }
                    }}>
                    -
                  </button>
                  <span className="cart-qnt">{cartitems[val]}</span>
                  <button className="cart-btn" onClick={() => addToCart(val)}>
                    +
                  </button>
                </div>
                <div class="col">
                  <h4>{cartitems[val] * data[val].price}</h4>
                </div>
                <div class="col">
                  <h4>
                    <BsFillTrashFill
                      className="remove"
                      onClick={() => Delete(val, ind)}
                    />
                  </h4>
                </div>
              </div>
            </div>
            <hr />
          </>
        );
      })}

      {totalamt > 0 && (
        <>
          <div className="grand-total">
            <h3>Grand Total : ${totalamt}</h3>
          </div>
          <button className="btn btn3">Place Order</button>
        </>
      )}
    </>
  );
};
export default Cart;
