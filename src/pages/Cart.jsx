import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.get("/api/cart/1");
      setCart(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const total =
    cart?.items?.reduce(
      (sum, item) =>
        sum + item.menuItem.price * item.quantity,
      0
    ) || 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {!cart || cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id}>
              <h3>{item.menuItem.name}</h3>

              <p>
                ₹{item.menuItem.price}
              </p>

              <p>
                Quantity: {item.quantity}
              </p>

              <hr />
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;