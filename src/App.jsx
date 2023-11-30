import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";


function App() {
  // In this code snippet, we're using the useState hook to create a state variable named foods and initializing it with the foodsJson array. The setFoods function will be used to update the state if needed in future iterations.
  const [foods, setFoods] = useState(foodsJson);

   // Function to delete a food item by ID
   const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((food, index) => (
        // <FoodBox key={index} food={food} />
        <FoodBox key={food.id} food={food} onDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
