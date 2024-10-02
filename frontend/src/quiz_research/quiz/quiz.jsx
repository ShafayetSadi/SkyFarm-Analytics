import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import quizData from "./quizdata.json";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Initialize navigate for redirection

  const currentQuestion = quizData.questions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === currentQuestion.answer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(
        `Quiz Finished! Your score is ${score}/${quizData.questions.length}`
      );
    }
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="container bg-gray-900 text-gray-200 min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-green-400">
        {quizData.quizTitle}
      </h1>
      <hr className="w-full mb-4 border-green-400" />
      <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
      <ul className="space-y-4 w-full max-w-lg">
        {currentQuestion.options.map((option, index) => (
          <li
            key={index}
            className={`p-4 rounded-lg cursor-pointer text-center transition-colors duration-200 
              ${
                selectedOption === option && isCorrect === true
                  ? "bg-green-500 text-white"
                  : ""
              } 
              ${
                selectedOption === option && isCorrect === false
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700"
              }
            `}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className={`mt-6 px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300 
          ${
            !selectedOption
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-green-600"
          }`}
      >
        Next
      </button>
      <div className="mt-4 text-gray-400">
        {currentQuestionIndex + 1} of {quizData.questions.length} questions
      </div>

      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="mt-6 px-6 py-3 bg-blue-500 text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Quiz;
