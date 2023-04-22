import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

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
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card>
      <section className={classes.meals}>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
