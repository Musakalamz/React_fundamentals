import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  // console.log(new values("#f15025").all(10));

  // toast.error("Error");

  function addColor(color) {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
