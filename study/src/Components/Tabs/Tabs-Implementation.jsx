import React from "react";
import { useState } from "react";

function TabsImplementation() {
  const [active, setActive] = useState("close");
  return (
    <div>
      <div>
        <button onClick={() => setActive("open")}> Open</button>
        <button onClick={() => setActive("close")}>Close</button>
      </div>
      <div>{active === "open" && <div>Open</div>}</div>
    </div>
  );
}

export default TabsImplementation;
