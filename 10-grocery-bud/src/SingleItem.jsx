import { useState } from "react";

function singleItem({ item, removeItem, editItem }) {
  const { name, completed, id } = item;

  // const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        // checked={isChecked}
        checked={completed}
        onChange={() => {
          // setIsChecked(!isChecked);
          editItem(id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          // textDecoration: isChecked && "line-through",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          removeItem(id);
        }}
      >
        {" "}
        delete
      </button>
    </div>
  );
}

export default singleItem;
