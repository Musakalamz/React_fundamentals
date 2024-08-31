import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";

function setLocalStorage(items) {
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
}

const defaultLocalStorage = JSON.parse(localStorage.getItem("list") || []);

const App = () => {
  // getLocalStorage();

  // const [items, setItems] = useState([]);
  // const [items, setItems] = useState(getLocalStorage);
  const [items, setItems] = useState(defaultLocalStorage);

  function addItem(itemName) {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const allItems = [...items, newItem];
    setItems(allItems);
    setLocalStorage(allItems);
    toast.success("Item added");
  }

  function removeItem(itemId) {
    const newItem = items.filter((item) => item.id !== itemId);
    setItems(newItem);
    setLocalStorage(newItem);
    toast.success("Item removed");
  }

  function editItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
