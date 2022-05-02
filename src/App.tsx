import useQuestions from './App.behaviour';

function App() {
	const questions = useQuestions();

	return (
		<div>
			<ul>
				{questions.map(question => (
					<li key={question.url}>{question.question}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
