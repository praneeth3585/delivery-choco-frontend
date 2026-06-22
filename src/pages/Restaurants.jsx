import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await api.get("/api/restaurants");

      console.log("API Response:", response.data);

      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Restaurants</h1>

      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.address}</p>

          <button
            onClick={() =>
              navigate(`/menu/${restaurant.id}`)
            }
          >
            View Menu
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Restaurants;