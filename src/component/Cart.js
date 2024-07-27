import React, { useContext, useState, useEffect } from "react";



const Cart = () => {
  const [cart, setCart] = useState([]);

  const [time, setTime] = useState("10:00");

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);


  const handleIncrease = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrease = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDelete = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);

    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  console.log(cart)
  return (
    <div className="cart-div">

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is Empty</p>
      ) : (
        <>
          <div className="input-div">
            <input
              type="text"
              className="input-box"
              placeholder="Enter your name"
            />
            <input
              type="number"
              className="input-box"
              placeholder="Enter your Mobile No"
            />
          </div>
          <div className="pickup-div">
            <span>I will pick up at</span>
            <p>
              <input type="time" className="timer"/> 
              
            </p>
          </div>
          <table className="cart-table">
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "left" }}>{item.name}</td>
                  <td>
                    <div className="increase-decrease">
                      <div
                        onClick={() => handleDecrease(item)}
                        className="inc-dec"
                      >
                        <span> - </span>
                      </div>

                      <span className="quantity">{item.quantity}</span>

                      <div
                        onClick={() => handleIncrease(item)}
                        className="inc-dec"
                      >
                        <span> + </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.quantity ? item.price * item.quantity : item.price}
                  </td>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 cancel-btn"
                    onClick={() => handleDelete(item)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {cart.length !== 0 ? (
        <div className="total-div">
          <h4>Total : {calculateTotal()}</h4>
          <button className="order-btn">Place Order</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;

{
  /* <table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {sessionStorageValue.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>
          <div className="increase-decrease">
            <button className="incdec-btn"> + </button>
            <span>{item.quantity}</span>
            <button className="incdec-btn"> - </button>
          </div>
        </td>
        <td>{item.price ? item.price : null}</td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </tr>
    ))}
  </tbody>
</table>; */
}
