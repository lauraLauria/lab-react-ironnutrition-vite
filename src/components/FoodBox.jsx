// Your code here

import React from "react";

const FoodBox = ({ food, onDelete }) => {
  const { id, name, calories, image, servings } = food;
  const totalCalories = servings * calories;

    // Handle delete button click
    const handleDelete = () => {
        // Call the onDelete function with the ID of the current food item
        onDelete(id);
      };

  return (
    <div className="food-box">
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;
