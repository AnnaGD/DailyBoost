import { combineReducers } from "redux";
// import initialState from '../redux/state'

const currentUser = (state = null, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				username: action.value,
				loggedIn: true
			};

		case "LOGOUT":
			return {
				...state,
				username: action.value,
				loggedIn: false
			};

		default:
			return state;
	}
};

const quizQuestions = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	quizQuestions,
	currentUser
});
