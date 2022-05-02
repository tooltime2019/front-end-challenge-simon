import {Route, Routes} from 'react-router-dom';
import QuestionList from './screens/QuestionList/QuestionList';
import QuestionDetail from './screens/QuestionDetail/QuestionDetail';

function App() {
	return (
		<Routes>
			<Route path={"/"} element={<QuestionList/>}/>
			<Route path={"/questions/:id"} element={<QuestionDetail/>}/>
		</Routes>
	);
}

export default App;
