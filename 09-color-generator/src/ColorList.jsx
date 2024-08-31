import { nanoid } from "nanoid";
import SingleList from "./SingleList";

function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleList key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
