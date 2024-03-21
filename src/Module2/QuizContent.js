import React from 'react';
import Quiz from './Quiz';

const dummyQuiz = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Mars'],
    answer: 'Jupiter',
  },
  // Add more questions as needed
];

function App() {
  return (
    <div>
      <Quiz quiz={dummyQuiz} />
    </div>
  );
}

export default App;
