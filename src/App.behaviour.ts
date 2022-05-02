import {useEffect, useState} from 'react';
import {fetchQuestions, Question} from './services/questions';

function useQuestions() {

	const [questions, setQuestions] = useState<Question[]>([]);

	useEffect(() => {
		async function fetchData() {
			setQuestions(await fetchQuestions())
		}

		void fetchData();
	}, [])
	return questions;
}

export default useQuestions;
