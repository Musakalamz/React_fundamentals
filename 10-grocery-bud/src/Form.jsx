import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newItemName);
    if (!newItemName) {
      toast.error("Enter an item");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          className="form-input"
          type="text"
          value={newItemName}
          onChange={(event) => {
            setNewItemName(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
