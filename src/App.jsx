import SingleQuestion from "./SingleQuestion";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [questions, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return (
            <SingleQuestion
              question={question}
              key={question.id}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </div>
    </main>
  );
};
export default App;
