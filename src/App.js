import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capitol of California?',
			answerOptions: [
				{ answerText: 'Los Angeles', isCorrect: false },
				{ answerText: 'Apple Valley', isCorrect: false },
				{ answerText: 'Wichita', isCorrect: false },
				{ answerText: 'Sacramento', isCorrect: true },
			],
		},
		{
			questionText: 'What is the Capitol of Iowa?',
			answerOptions: [
				{ answerText: 'Des Moines', isCorrect: true },
				{ answerText: 'Boone', isCorrect: false },
				{ answerText: 'Grimes', isCorrect: false },
				{ answerText: 'Iowa City', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Capitol of Kansas?',
			answerOptions: [
				{ answerText: 'Wichita', isCorrect: false },
				{ answerText: 'Newton', isCorrect: false },
				{ answerText: 'Topeka', isCorrect: true },
				{ answerText: 'Boone', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Capitol of New York?',
			answerOptions: [
				{ answerText: 'Albany', isCorrect: true },
				{ answerText: 'Lawrence', isCorrect: false },
				{ answerText: 'Grimes', isCorrect: false },
				{ answerText: 'Apple Valley', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
