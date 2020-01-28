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
	}
}
