import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Sorting = () => {
  // Data for Sorting questions, with link keywords
  const questions = [
    { id: 1, question: "Bubble Sort Algorithm", linkKeyword: "bubble" },
    { id: 2, question: "Selection Sort Algorithm", linkKeyword: "selection" },
    { id: 3, question: "Insertion Sort Algorithm", linkKeyword: "insertion" },
    { id: 4, question: "Quick Sort Algorithm", linkKeyword: "quick" },
    { id: 5, question: "Merge Sort Algorithm", linkKeyword: "merge" },
  ];

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("sortingProgress")) || {}
  );

  const toggleCompletion = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem("sortingProgress", JSON.stringify(updated));
  };

  const resetProgress = () => {
    setCompleted({});
    localStorage.removeItem("sortingProgress");
  };

  const progress = Math.round(
    (Object.values(completed).filter((done) => done).length /
      questions.length) *
      100
  );

  return (
    <div className="container mt-4">
      <h2>Sorting Questions</h2>
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
          {questions.map(({ id, question, linkKeyword }) => (
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
                  href={`https://github.com/Harshitv21/TCS-NQT-Coding-Sheet/blob/main/Sorting/${linkKeyword}.cpp`}
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

export default Sorting;
