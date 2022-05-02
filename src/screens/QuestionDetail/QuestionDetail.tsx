import React from 'react';
import {useParams} from 'react-router-dom';

const QuestionDetail = () => {
	const {id} = useParams();
	console.log(id);
	return (
		<div>
			I am detail
		</div>
	);
};

export default QuestionDetail;
