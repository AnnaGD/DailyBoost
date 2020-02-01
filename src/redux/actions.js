export const login = username => {
	return {
		type: "LOGIN",
		value: username
	};
};

export const logout = () => {
	return {
		type: "LOGOUT",
		value: "Guest"
	};
};

export const takeQuiz = () => {
	return {
		type: "TAKEQUIZ",
		value: true
	};
};

export const toggleHistory = () => {
	return {
		type: "TOGGLE_HISTORY",
		value: true
	};
};

export const fetchHistory = () => {
	debugger
	return dispatch => {
		fetch("/api/history")
			.then(res => res.json())
			.then(response => {
				const action = {
					type: "FETCH_HISTORY",
					value: response
				};
				dispatch(action);
			})
			.catch(error => console.log(error));
	};
};

// export const quizComplete = () => {
// 	return {
// 		type: "QUIZ_COMPLETE",
// 		value: true
// 	}
// }

export const quizResult = (result) => {
	return {
		type: "QUIZ_RESULT",
		value: result
	}
}