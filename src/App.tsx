import {useQuestions} from './App.behaviour';
import styles from './App.module.css';

function App() {
	const questions = useQuestions();

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Questions</h1>
			<div>
				<ul className={styles.cardList}>
					{questions.map(question => (
						<li key={question.url} className={styles.card}>{question.question}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
