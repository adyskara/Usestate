import { useState } from "react";
import "./App.css";
import Course from "./Meal";

function getRandomMeals() {
  const mealArray = [
    "DanDan",
    "Bibimbap",
    "ChickenRamen",
    "Tteokbokki",
    "Yangzhou",
  ];
  return mealArray[Math.floor(Math.random() * mealArray.length)];
}

function App() {
  const [meals, setMeals] = useState([]);

  const handleClick = () => {
    setMeals([...meals, getRandomMeals()]);
  };
  const mealList = meals.map((meal, index) => {
    return <Course key={index} mealsName={meal} />;
  });
  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}>
        Yemek ekle
      </button>
      <div className="mealList">{mealList}</div>
    </div>
  );
}

export default App;
