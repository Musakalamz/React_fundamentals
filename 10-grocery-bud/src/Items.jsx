import SingleItem from "./singleItem";

function Items({ items, removeItem, editItem }) {
  return (
    <h1 className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </h1>
  );
}

export default Items;
