import React from "react";

const ConditionalRendering = () => {
  const users = [
    { id: 1, name: "Raj", Age: 30 },
    { id: 2, name: "Bhushan", Age: 32 },
    { id: 3, name: "Roshan", Age: 34 },
    { id: 4, name: "Nagesh", Age: 29 },
    { id: 5, name: "Chetan", Age: 27 },
  ];

  return (
    <div>
      <ul>
        {users.map((user) =>
          user.Age > 30 ? (
            <li key={user.id}>{user.name} is over 30 years old</li>
          ) : (
            <li key={user.id}>{user.name} is under 30 years old</li>
          )
        )}
      </ul>
    </div>
  );
};

export default ConditionalRendering;
