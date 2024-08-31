import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const id = nanoid();

  function handleSubmit(event) {
    event.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
    console.log(text);
  }

  console.log(text);
  return (
    <section className="section-center">
      <h4>Tired Of Boring Lorem Ipsum</h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount"> Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          step={1}
          max={8}
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((txt, id) => {
          return <p key={id}> {txt} </p>;
        })}
      </article>
    </section>
  );
};
export default App;
