import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function Menu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await api.get(
        `/api/menu/restaurant/${id}`
      );

      setMenuItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (item) => {
    try {
      await api.post("/api/cart/add", {
        cartId: 1,
        menuItemId: item.id,
        quantity: 1,
      });

      alert(`${item.name} added to cart`);
    } catch (error) {
      console.error(error);
      alert("Failed to add item to cart");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Menu</h1>

      <button onClick={() => navigate("/cart")}>
        View Cart
      </button>

      <br />
      <br />

      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add To Cart
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Menu;