import React from "react";

const users = [
  { id: 1, name: "Ajay", age: 22 },
  { id: 2, name: "Vijay", age: 23 },
  { id: 3, name: "Roshani", age: 24 },
];

const ListObject = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListObject;
