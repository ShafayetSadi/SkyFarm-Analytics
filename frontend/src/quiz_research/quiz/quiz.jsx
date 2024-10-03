import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import quizData from "./quizdata.json";
import Menu from "../../components/Menu/Menu";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); // State to manage the result modal visibility
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
      setShowResult(true); // Show result when quiz ends
    }
  };

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="container bg-gray-900 text-gray-200 min-h-screen p-6 flex flex-col items-center justify-center">
      <div className=" absolute top-5 left-5">
        <Menu />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-neon-blue">
        {quizData.quizTitle}
      </h1>
      <hr className="w-full mb-4 border-neon-blue" />
      {!showResult ? (
        <>
          <h2 className="text-xl font-semibold mb-6">
            {currentQuestion.question}
          </h2>
          <ul className="space-y-4 w-full max-w-lg">
            {currentQuestion.options.map((option, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg cursor-pointer text-center transition-colors duration-200 bg-gray-800 hover:bg-gray-700
                  ${
                    selectedOption === option && isCorrect === true
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : ""
                  } 
                  ${
                    selectedOption === option && isCorrect === false
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : ""
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
            className={`mt-6 px-6 py-3 bg-neonBlue text-gray-900 font-semibold rounded-lg shadow-md transition-all duration-300 
              ${
                !selectedOption
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
          >
            Next
          </button>
          <div className="mt-4 text-gray-400">
            {currentQuestionIndex + 1} of {quizData.questions.length} questions
          </div>
        </>
      ) : (
        // Result modal is shown after quiz ends
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-center p-8 rounded-lg shadow-lg border border-neon-blue max-w-lg w-full animate-glow">
            <h2 className="text-4xl font-bold text-neon-blue mb-4">
              Quiz Completed!
            </h2>
            <p className="text-2xl text-gray-200 mb-6">
              Your score: {score}/{quizData.questions.length}
            </p>
            <button
              onClick={handleBackToHome}
              className="px-8 py-3 bg-neonBlue text-gray-900 font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
