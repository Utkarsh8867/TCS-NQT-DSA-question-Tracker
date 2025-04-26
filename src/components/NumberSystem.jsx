import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const NumberSystem = () => {
  // Data for the Number System questions
  const questions = [
    { id: 1, question: "Convert Binary to Decimal" },
    { id: 2, question: "Convert binary to octal" },
    { id: 3, question: "Decimal to Binary conversion" },
    { id: 4, question: "Convert decimal to octal" },
    { id: 5, question: "Convert octal to binary" },
    { id: 6, question: "Convert octal to decimal" },
    { id: 7, question: "Convert digits/numbers to words" },
  ];

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("numberSystemProgress")) || {}
  );

  const toggleCompletion = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem("numberSystemProgress", JSON.stringify(updated));
  };

  const resetProgress = () => {
    setCompleted({});
    localStorage.removeItem("numberSystemProgress");
  };

  const progress = Math.round(
    (Object.values(completed).filter((done) => done).length /
      questions.length) *
      100
  );

  return (
    <div className="container mt-4">
      <h2>Number System Questions</h2>
      <ProgressBar progress={progress} />
      <button
        className="btn btn-danger mb-3"
        onClick={resetProgress}
        style={{ display: "block" }}
      >
        Reset Progress
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <b>#</b>
            </th>
            <th>
              <b>Question</b>
            </th>
            <th>
              <b>Solution</b>
            </th>
            <th>
              <b>Done</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {questions.map(({ id, question }) => (
            <tr key={id}>
              <td>{id}</td>
              <td
                style={{
                  textDecoration: completed[id] ? "line-through" : "none",
                }}
              >
                {question}
              </td>
              <td>
                <img
                  src="/assets/Solution.svg"
                  alt="Solution icon"
                  style={{ width: "24px", height: "24px", marginLeft: "8px" }}
                />
                <a
                  href={`https://github.com/Harshitv21/TCS-NQT-Coding-Sheet/blob/main/Number%20System/${id}.cpp`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solution-link"
                >
                  Solution
                </a>
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={completed[id] || false}
                  onChange={() => toggleCompletion(id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberSystem;
