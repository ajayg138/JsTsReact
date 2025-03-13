import React from "react";

const ListWithClickEvent = () => {
  const COMPANY = ["Hii", "Hello", "Namaste"];
  const handleClick = (COMPANY) => {
    alert(`You clicked on ${COMPANY}`);
  };

  return (
    <ul>
      {COMPANY.map((COMPANY, index) => (
        <button key={index} onClick={() => handleClick(COMPANY)}>
          {COMPANY}
        </button>
      ))}
    </ul>
  );
};

export default ListWithClickEvent;
