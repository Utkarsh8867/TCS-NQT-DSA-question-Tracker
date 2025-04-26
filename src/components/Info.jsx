// import React from "react";

// const Info = () => {
//   return (
//     <div className="info-container">
//       <h2>Welcome to TCS NQT Coding Sheet Tracker</h2>
//       <p>
//         This website helps you track your progress as you solve coding questions
//         from different sections of the TCS NQT syllabus. Each section contains
//         various problems that you can mark as done as you solve them.
//       </p>

//       <h3>Features</h3>
//       <ul>
//         <li>Track progress on various coding questions.</li>
//         <li>Quick links to solutions for each question.</li>
//         <li>Simple interface with a focus on usability.</li>
//       </ul>

//       <h3>How to Use</h3>
//       <p>
//         Select a section from the navigation menu, and as you solve questions,
//         check the "Done" box to mark them as completed. You can view the
//         solution to any question by clicking on the provided link.
//       </p>

//       <p>
//         Happy coding, and keep progressing towards your TCS NQT exam
//         preparation!
//       </p>

//       <p>
//         Also{" "}
//         <a
//           className="solution-link"
//           href="https://takeuforward.org/interviews/tcs-nqt-coding-sheet-tcs-coding-questions/"
//           target="_blank"
//         >
//           here
//         </a>{" "}
//         is the original takeuforward's sheet for article solutions and other
//         references.
//       </p>
//     </div>
//   );
// };

// export default Info;




import React from "react";
import './Info.css'; // Import CSS for styling

const Info = () => {
  return (
    <div className="info-container">
      <h2 className="heading">Welcome to TCS NQT Coding Sheet Tracker</h2>
      <p className="intro-text">
        This website helps you track your progress as you solve coding questions
        from different sections of the TCS NQT syllabus. Each section contains
        various problems that you can mark as done as you solve them.
      </p>

      <div className="feature-section">
        <h3 className="subheading">Features</h3>
        <ul className="feature-list">
          <li className="feature-item">Track progress on various coding questions.</li>
          <li className="feature-item">Quick links to solutions for each question.</li>
          <li className="feature-item">Simple interface with a focus on usability.</li>
        </ul>
      </div>

      <div className="usage-section">
        <h3 className="subheading">How to Use</h3>
        <p className="usage-text">
          Select a section from the navigation menu, and as you solve questions,
          check the "Done" box to mark them as completed. You can view the
          solution to any question by clicking on the provided link.
        </p>
      </div>

      <p className="closing-text">
        Happy coding, and keep progressing towards your TCS NQT exam
        preparation!
      </p>

      <p className="external-link">
        Also, <a
          className="solution-link"
          href="https://takeuforward.org/interviews/tcs-nqt-coding-sheet-tcs-coding-questions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a> is the original TakeUForward sheet for article solutions and other
        references.
      </p>
    </div>
  );
};

export default Info;
