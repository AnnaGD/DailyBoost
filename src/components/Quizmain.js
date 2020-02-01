import React, { Component } from "react";
import Quiz from "./QuizComps/Quiz";
import Result from "./QuizComps/Result";
// import logo from "./logo.svg";
import "./QuizComps/Quizmain.css";
import Button from '@material-ui/core/Button';
import Activities from '../containers/Activities';

//Define our initial state in the App class’s constructor function.

class Quizmain extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
			questionId: 1,
			question: "",
			answerOptions: [],
			answer: "",
			answersCount: {},
			result: null
		};

		this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
	}
	componentDidMount() {
		const shuffledAnswerOptions = this.props.quizQuestions.map(question =>
			this.shuffleArray(question.answers)
		);

		this.setState({
			question: this.props.quizQuestions[0].question,
			answerOptions: shuffledAnswerOptions[0]
		});
	}

	shuffleArray(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	setUserAnswer(answer) {
		this.setState(state => ({
			answersCount: {
				...state.answersCount,
				[answer]: (state.answersCount[answer] || 0) + 1
			},
			answer: answer
		}));
	}

	setNextQuestion() {
		const counter = this.state.counter + 1;
		const questionId = this.state.questionId + 1;
		this.setState({
			counter: counter,
			questionId: questionId,
			question: this.props.quizQuestions[counter].question,
			answerOptions: this.props.quizQuestions[counter].answers,
			answer: ""
		});
	}

	handleAnswerSelected(event) {
		this.setUserAnswer(event.currentTarget.value);
		if (this.state.questionId < this.props.quizQuestions.length) {
			setTimeout(() => this.setNextQuestion(), 300);
		} else {
			// debugger
			setTimeout(() => this.setResults(this.getResults()), 300);
		}
	}

	getResults() {
		const answersCount = this.state.answersCount;
		const answersCountKeys = Object.keys(answersCount);
		const answersCountValues = answersCountKeys.map(key => answersCount[key]);
		const maxAnswerCount = Math.max.apply(null, answersCountValues);

		return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
	}

	setResults(result) {
		if (result.length === 1) {
			this.setState({ result: result[0] });
		} else {
			this.props.quizResult(result)
			debugger
			this.setState({
				result:
					"You should look into if any social events are hapenning tonight, it's never too late to learn how to two-step!!"
			});
			// this.props.quizComplete()
		}
	}

	renderQuiz() {
		console.log(this.props);
		return (
			<Quiz
				answer={this.state.answer}
				answerOptions={this.state.answerOptions}
				questionId={this.state.questionId}
				question={this.state.question}
				questionTotal={this.props.quizQuestions.length}
				onAnswerSelected={this.handleAnswerSelected}
			/>
		);
	}

	renderResult() {
		return <Result quizResult={this.state.result} />;
	}

	showActivities(){
		debugger
		return this.props.quizComplete
	}

	render() {
		return (
			<div className="Quizmain">
				<div className="Quizmain-header">
					<h3>Let's check in ...</h3>
				</div>
				{this.state.result ? this.renderResult() : this.renderQuiz()}
				{this.state.result && this.showActivities}
				{this.state.result && <Activities />}
			</div>
		);
	}
}

export default Quizmain;
