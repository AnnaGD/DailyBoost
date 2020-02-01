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

const quizReady = (state = false, action) => {
	switch (action.type) {
		case "TAKEQUIZ":		
			return action.value
		default:
			return state;
	}
}

const quizQuestions = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const toggleHistory = (state = false, action) => {
	switch (action.type) {
		case "TOGGLE_HISTORY":
			return action.value
		default:
			return state;
	}
};

const history = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_HISTORY':
            return action.value
        case 'ADD_HISTORY':
            return [ ...state, action.value ]
        default:
            return state
    }
}

const quizComplete = (state = false, action) => {
	switch(action.type) {
		case 'QUIZ_RESULT':
			return true
		default:
			return state
	}
}

const quizResult = (state= '', action) => {
	switch(action.type) {
		case 'QUIZ_RESULT':
		debugger
			return action.value
		default:
			return state
	}
}

export default combineReducers({
	quizReady,
	quizQuestions,
	currentUser,
	history,
	toggleHistory,
	quizComplete,
	quizResult
});
