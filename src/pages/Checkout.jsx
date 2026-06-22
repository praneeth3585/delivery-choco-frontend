import { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const placeOrder = () => {
    alert("Order Placed Successfully!");

    localStorage.removeItem("cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <br />
      <br />

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;