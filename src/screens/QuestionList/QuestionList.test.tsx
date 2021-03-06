import React from 'react';
import {render, screen} from '@testing-library/react';
import QuestionList from './QuestionList';
import * as behaviour from './QuestionList.behaviour';

test('renders header', () => {
	render(<QuestionList/>);
	const header = screen.getByText(/Questions/i);
	expect(header).toBeInTheDocument();
});

test(`renders list of questions`, async () => {
	jest.spyOn(behaviour, 'useQuestions').mockImplementation(() => {
		return [
			{
				question: "Favourite programming language?",
				publishedAt: "2014-11-11T08:40:51.620Z",
				url: "/questions/1",
				choices: [
					{
						choice: "Swift",
						url: "/questions/1/choices/1",
						votes: 2048
					}, {
						choice: "Python",
						url: "/questions/1/choices/2",
						votes: 1024
					}
				]
			}
		]
	})

	render(<QuestionList/>);

	expect(await screen.getByText(/Favourite programming language/i)).toBeInTheDocument();
});
