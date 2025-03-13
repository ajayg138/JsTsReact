import React from "react";

const FruitsList = () => {
  const items = ["Apple", "Banana", "Chiku", "Papaya"];
  return (
    <div>
      <h1>My Fruit List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
