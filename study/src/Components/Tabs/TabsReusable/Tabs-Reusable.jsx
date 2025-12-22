import { useState } from "react";
//Logic
const TabsReusable = ({ tabs }) => {
  const [active, setActive] = useState(2);
  console.log({ tabs });
  console.log(tabs[active]);
  return (
    <div>
      <h1>Reusable Tabs</h1>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => setActive(index)}>
          {tab.label}
        </button>
      ))}
      <div>{tabs[active].content}</div>
    </div>
  );
};

export default TabsReusable;
