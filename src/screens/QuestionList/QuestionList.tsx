import React from 'react';
import {useQuestions} from './QuestionList.behaviour';
import styles from './QuestionList.module.css';
import {Link} from 'react-router-dom';

const QuestionList = () => {
	const questions = useQuestions();

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Questions</h1>
			<div>
				<ul className={styles.cardList}>
					{questions.map(question => (
						<li key={question.url} className={styles.listItem}>
							<Link className={styles.card} to={question.url}>
								{question.question}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default QuestionList;
