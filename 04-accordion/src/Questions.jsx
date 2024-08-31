import questions from "./data";
import SingleQuestion from "./SingleQuestion";

function Questions({ question }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion key={question.id} {...question} />
      ))}
    </section>
  );
}

export default Questions;
