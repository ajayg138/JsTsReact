import React from "react";
import { useState } from "react";

const HandlingForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <h2>React Controlled Form</h2>
      <form>
        <label>Enter Text: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <br />
      <div>
        <strong>Entered Value:</strong> {inputValue}
      </div>
    </div>
  );
};

export default HandlingForm;
