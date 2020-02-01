import React from "react";

function Result(props) {
	return (
		<div className="result">
			Try the following: <br/> <strong> {props.quizResult} </strong>
		</div>
	);
}

export default Result;
