import React from "react";
import Component2 from "./Component2.jsx";
import Component1 from "./Component1.jsx";
import TabsReusable from "./Tabs-Reusable.jsx";

function Component3() {
  return <div>Component3</div>;
}
//Data
const Tabs = () => {
  const tabsData = [
    {
      label: "Component1",
      content: <Component1 />,
    },
    {
      label: "Component2",
      content: <Component2 />,
    },
    {
      label: "Component3",
      content: <Component3 />,
    },
  ];
  return <TabsReusable tabs={tabsData} />;
};

export default Tabs;
