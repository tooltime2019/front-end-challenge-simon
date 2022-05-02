import {useEffect, useState} from 'react';

interface Choice {
	choice: string,
	votes: number,
	url: string,
}

interface Question {
	question: string,
	choices: Choice[],
	published_at: string,
	url: string,
}

function useQuestions() {
	const url = "https://polls.apiblueprint.org/questions"

	const [questions, setQuestions] = useState<Question[]>([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch(url);
			const json = await data.json();
			setQuestions(json)
		}

		void fetchData();
	}, [])
	return questions;
}

export default useQuestions;
