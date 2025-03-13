import React from "react";
import Display from "./components/Display"; // ✅ Fixed: Renamed 'display' to 'Display' (React components should start with an uppercase letter)

const App = () => {
  return (
    <div>
      <h1>Hello Everyone</h1>{" "}
      {/* ✅ Fixed: Added text inside <h1> to avoid an empty heading */}
      <Display /> {/* ✅ Fixed: Properly used Display component */}
    </div>
  );
};

export default App;
