import React from "react";

function Result(props) {
	return (
		<div className="result">
			Try the following: <strong> {props.quizResult} </strong>!
		</div>
	);
}

export default Result;
