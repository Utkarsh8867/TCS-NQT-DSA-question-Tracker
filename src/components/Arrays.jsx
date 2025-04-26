import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Arrays = () => {
  // Data for the questions
  const questions = [
    { id: 1, question: "Find the smallest number in an array" },
    { id: 2, question: "Find the largest number in an array" },
    {
      id: 3,
      question: "Second Smallest and Second Largest element in an array",
    },
    { id: 4, question: "Reverse a given array" },
    { id: 5, question: "Count frequency of each element in an array" },
    { id: 6, question: "Rearrange array in increasing-decreasing order" },
    { id: 7, question: "Calculate sum of the elements of the array" },
    { id: 8, question: "Rotate array by K elements - Block Swap Algorithm" },
    { id: 9, question: "Average of all elements in an array" },
    { id: 10, question: "Find the median of the given array" },
    { id: 11, question: "Remove duplicates from a sorted array" },
    { id: 12, question: "Remove duplicates from unsorted array" },
    { id: 13, question: "Adding Element in an array" },
    { id: 14, question: "Find all repeating elements in an array" },
    { id: 15, question: "Find all non-repeating elements in an array" },
    { id: 16, question: "Find all symmetric pairs in array" },
    { id: 17, question: "Maximum product subarray in an array" },
    {
      id: 18,
      question: "Replace each element of the array by its rank in the array",
    },
    { id: 19, question: "Sorting elements of an array by frequency" },
    { id: 20, question: "Rotation of elements of array - left and right" },
    { id: 21, question: "Finding equilibrium index of an array" },
    {
      id: 22,
      question: "Finding Circular rotation of an array by K positions",
    },
    {
      id: 23,
      question: "Sort an array according to the order defined by another array",
    },
    { id: 24, question: "Search an element in an array" },
    { id: 25, question: "Check if Array is a subset of another array or not" },
  ];

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("arraysProgress")) || {}
  );

  const toggleCompletion = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem("arraysProgress", JSON.stringify(updated));
  };

  const resetProgress = () => {
    setCompleted({});
    localStorage.removeItem("arraysProgress");
  };

  const progress = Math.round(
    (Object.values(completed).filter((done) => done).length /
      questions.length) *
      100
  );

  return (
    <div className="container mt-4">
      <h2>Arrays Questions</h2>
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
                  href={`https://github.com/Harshitv21/TCS-NQT-Coding-Sheet/blob/main/Arrays/${id}.cpp`}
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

export default Arrays;
