import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Numbers = () => {
  // Data for the Numbers questions
  const questions = [
    { id: 1, question: "Check if a number is palindrome or not" },
    { id: 2, question: "Find all Palindrome numbers in a given range" },
    { id: 3, question: "Check if a number is prime or not" },
    { id: 4, question: "Prime numbers in a given range" },
    { id: 5, question: "Check if a number is armstrong number or not" },
    { id: 6, question: "Check if a number is perfect number" },
    { id: 7, question: "Even or Odd" },
    { id: 8, question: "Check whether a given number is positive or negative" },
    { id: 9, question: "Sum of first N natural numbers" },
    { id: 10, question: "Find Sum of AP Series" },
    { id: 11, question: "Program to find sum of GP Series" },
    { id: 12, question: "Greatest of two numbers" },
    { id: 13, question: "Greatest of three numbers" },
    { id: 14, question: "Leap Year or not" },
    { id: 15, question: "Reverse digits of a number" },
    { id: 16, question: "Maximum and Minimum digit in a number" },
    { id: 17, question: "Print Fibonacci up to Nth Term" },
    { id: 18, question: "Factorial of a number" },
    { id: 19, question: "Power of a number" },
    { id: 20, question: "Factors of a given number" },
    { id: 21, question: "Print all prime factors of the given number" },
    { id: 22, question: "Check if a number is a strong number or not" },
    { id: 23, question: "Check if a Number is Automorphic" },
    { id: 24, question: "GCD of two numbers" },
    { id: 25, question: "LCM of two numbers" },
    { id: 26, question: "Check if a number is Harshad number" },
    { id: 27, question: "Check if the number is abundant number or not" },
    { id: 28, question: "Sum of digits of a number" },
    { id: 29, question: "Sum of numbers in the given range" },
    {
      id: 30,
      question:
        "Permutations in which N people can occupy R seats in a classroom",
    },
    { id: 31, question: "Program to add two fractions" },
    { id: 32, question: "Replace all 0s with 1s in a given integer" },
    {
      id: 33,
      question: "Can a number be expressed as a sum of two prime numbers",
    },
    { id: 34, question: "Calculate the area of circle" },
    { id: 35, question: "Program to find roots of a Quadratic Equation" },
  ];

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("numbersProgress")) || {}
  );

  const toggleCompletion = (id) => {
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem("numbersProgress", JSON.stringify(updated));
  };

  const resetProgress = () => {
    setCompleted({});
    localStorage.removeItem("numbersProgress");
  };

  const progress = Math.round(
    (Object.values(completed).filter((done) => done).length /
      questions.length) *
      100
  );

  return (
    <div className="container mt-4">
      <h2>Numbers Questions</h2>
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
                  href={`https://github.com/Harshitv21/TCS-NQT-Coding-Sheet/blob/main/Numbers/${id}.cpp`}
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

export default Numbers;
