import React from "react";
//Displays the answer options

function AnswerOption(props) {
	return (
		<ul className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked={props.answerType === props.answer}
				id={props.answerType}
				value={props.answerType}
				disabled={props.answer}
				onChange={props.onAnswerSelected}
			/>
			<label className="radioCustomLabel" htmlFor={props.answerType}>
				{props.answerContent}
			</label>
		</ul>
	);
}

export default AnswerOption;
