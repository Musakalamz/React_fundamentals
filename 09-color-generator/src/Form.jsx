import { useState } from "react";

function Form({ addColor }) {
  const [color, setColor] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addColor(color);
  }

  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" action="" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />

        <input
          type="text"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
