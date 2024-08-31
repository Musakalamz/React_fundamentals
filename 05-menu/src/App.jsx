import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const allCategory = new Set(data.map((item) => item.category));
// const newCategory = ["all", ...allCategory];
// console.log(newCategory);

// const allCategory = ["all", ...new Set(data.map((item) => item.category))];
// console.log(allCategory);

const App = () => {
  const allCategory = ["all", ...new Set(data.map((item) => item.category))];

  const [items, setItems] = useState(data);
  const [category, setCategory] = useState(allCategory);

  function filterItem(category) {
    if (category === "all") {
      return setItems(data);
    }

    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text={"Our Menu"} />
        <Categories category={category} filterItem={filterItem} />
        <Menu items={items} />
      </section>
    </main>
  );
};
export default App;
