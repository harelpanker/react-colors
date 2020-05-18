import React from "react";
import seedColors from "./seedColors";

import Palette from "./components/Palette";

function App() {
  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;
