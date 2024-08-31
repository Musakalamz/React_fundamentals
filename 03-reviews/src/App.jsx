import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  // function checkNumber(number) {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // }

  function prevPerson() {
    return setIndex((currentIndex) => {
      // const newIndex = currentIndex - 1;
      // return checkNumber(newIndex);
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  }

  function nextPerson() {
    return setIndex((currentIndex) => {
      // const newIndex = currentIndex + 1;
      // return checkNumber(newIndex);
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  }

  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    // setIndex(checkNumber(randomNumber));
    return setIndex(randomNumber % people.length);
  }

  // console.log(name);
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-contain">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          {" "}
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
