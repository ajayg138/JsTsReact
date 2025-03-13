import React from "react";

const ReactForms = () => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Enter Text</label>
        <input type="text" onChange={onInputChange} />
      </form>
    </div>
  );
};

export default ReactForms;
