import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Crunchy Bites",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Kachori",
    description: "Filled with millets",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Manchurian",
    description: "Tasty Treat",
    price: 50,
  },
  {
    id: "m4",
    name: "Noodles",
    description: "Tasty",
    price: 60,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
