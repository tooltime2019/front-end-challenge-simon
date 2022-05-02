interface ChoiceResponse {
	choice: string,
	votes: number,
	url: string,
}

interface QuestionResponse {
	question: string,
	choices: Choice[],
	published_at: string,
	url: string,
}

export interface Choice {
	choice: string,
	votes: number,
	url: string,
}

export interface Question {
	question: string,
	choices: Choice[],
	publishedAt: string,
	url: string,
}

export async function fetchQuestions(): Promise<Question[]> {
	const url = "https://polls.apiblueprint.org/questions"

	const data = await fetch(url);
	const json: QuestionResponse[] = await data.json();
	return mapQuestions(json);
}

function mapQuestions(json: QuestionResponse[]): Question[] {
	return json.map(questionResponse => {
		return {
			question: questionResponse.question,
			choices: mapChoices(questionResponse.choices),
			publishedAt: questionResponse.published_at,
			url: questionResponse.url,
		}
	})
}

function mapChoices(json: ChoiceResponse[]): Choice[] {
	return json.map(choiceResponse => {
		return {
			choice: choiceResponse.choice,
			votes: choiceResponse.votes,
			url: choiceResponse.url,
		}
	})
}
