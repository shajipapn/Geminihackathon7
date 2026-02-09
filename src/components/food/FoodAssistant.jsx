import React, { useState } from "react";
import "./food.css";

const FoodAssistant = () => {
  const [restaurant, setRestaurant] = useState("");
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleOrder = () => {
    setShowConfirm(true);
  };

  if (showConfirm) {
    return (
      <div className="food-confirm">
        <h3>Order Confirmed!</h3>
        <p>
          {quantity} x {food} from {restaurant}
        </p>
        <button onClick={() => setShowConfirm(false)}>Order More</button>
      </div>
    );
  }

  return (
    <div className="food-assistant">
      <h2>Food Assistant</h2>
      <div className="food-form">
        <label>
          Restaurant:
          <input
            value={restaurant}
            onChange={e => setRestaurant(e.target.value)}
            placeholder="e.g. Domino's, KFC"
          />
        </label>
        <label>
          Food Item:
          <input
            value={food}
            onChange={e => setFood(e.target.value)}
            placeholder="e.g. Pizza, Burger"
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            style={{ width: 60 }}
          />
        </label>
        <button onClick={handleOrder}>Order Food</button>
      </div>
    </div>
  );
};

export default FoodAssistant;
