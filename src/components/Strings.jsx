import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Strings = () => {
  // Data for the questions
  const questions = [
    { id: 1, question: "Check if a given string is palindrome or not" },
    { id: 2, question: "Count number of vowels, consonants, spaces in String" },
    { id: 3, question: "Find the ASCII value of a character" },
    { id: 4, question: "Remove all vowels from the string" },
    { id: 5, question: "Remove spaces from a string" },
    { id: 6, question: "Remove characters from a string except alphabets" },
    { id: 7, question: "Reverse a String" },
    { id: 8, question: "Remove brackets from an algebraic expression" },
    { id: 9, question: "Sum of the numbers in a String" },
    { id: 10, question: "Capitalize first and last character of each word" },
    { id: 11, question: "Calculate frequency of characters in a string" },
    { id: 12, question: "Find Non-repeating characters of a String" },
    { id: 13, question: "Check if two strings are anagram of each other" },
    // Disabled questions
    {
      id: 14,
      question: "Count common sub-sequence in two strings [DP]",
      disabled: true,
    },
    {
      id: 15,
      question:
        "Check if two strings match where one string contains wildcard characters [DP]",
      disabled: true,
    },
    {
      id: 16,
      question: "Return maximum occurring character in the input string",
    },
    { id: 17, question: "Remove all duplicates from the input string" },
    { id: 18, question: "Print all the duplicates in the input string" },
    {
      id: 19,
      question:
        "Remove characters from first string present in the second string",
    },
    {
      id: 20,
      question:
        "Change every letter with the next lexicographic alphabet in the given string",
    },
    {
      id: 21,
      question: "Write a program to find the largest word in a given string",
    },
    { id: 22, question: "Write a program to sort characters in a string" },
    { id: 23, question: "Count number of words in a given string" },
    {
      id: 24,
      question:
        "Write a program to find a word in a given string with the highest number of repeated letters",
    },
    { id: 25, question: "Change case of each character in a string" },
    { id: 26, question: "Concatenate one string to another" },
    {
      id: 27,
      question:
        "Write a program to find a substring within a string. If found, display its starting position",
    },
    { id: 28, question: "Reverse words in a string" },
  ];

  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("stringsProgress")) || {}
  );

  const toggleCompletion = (id) => {
    if (questions.find((q) => q.id === id && q.disabled)) return; // Prevent checking of disabled questions
    const updated = { ...completed, [id]: !completed[id] };
    setCompleted(updated);
    localStorage.setItem("stringsProgress", JSON.stringify(updated));
  };

  const resetProgress = () => {
    setCompleted({});
    localStorage.removeItem("stringsProgress");
  };

  const progress = Math.round(
    (Object.values(completed).filter((done) => done).length /
      questions.length) *
      100
  );

  return (
    <div className="container mt-4">
      <h2>Strings Questions</h2>
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
          {questions.map(({ id, question, disabled }) => (
            <tr key={id} className={disabled ? "text-muted" : ""}>
              <td>{id}</td>
              <td
                style={{
                  textDecoration: completed[id] ? "line-through" : "none",
                  color: disabled ? "#ccc" : "inherit", // Color for disabled questions
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
                  href={`https://github.com/Harshitv21/TCS-NQT-Coding-Sheet/blob/main/String/${id}.cpp`}
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
                  disabled={disabled} // Disable checkbox for unfinished questions
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Strings;
