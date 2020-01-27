import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
// import Activitiesmain from './'

const topics = [
	{name: "Outdoors & Adventure", id: "3"},
	{name: "Tech", id:"34"},
	{name: "Family", id:"25"},
	{name: "Health & Wellness", id: "14"},
	{name: "Sports & Fitness", id:"9"},
	{name: "Learning", id:"6"},
	{name: "Photography", id:"27"},
	{name: "Food & Drink", id:"10"},
	{name: "Writing", id:"36"},
	{name: "Language & Culture", id: "16"},
	{name: "Music", id:"21"},
	{name: "Movements", id:"4"},
	{name: "LGBTQ", id:"12"},
	{name: "Film", id:"20"},
	{name: "Sci-Fi & Games", id:"11"},
	{name: "Beliefs", id:"22"},
	{name: "Arts", id:"1"},
	{name: "Book Clubs", id:"18"},
	{name: "Dance", id:"5"},
	{name: "Pets", id:"26"},
	{name: "Hobbies & Crafts", id:"15"},
	{name: "Fashion & Beauty", id:"8"},
	{name: "Social", id:"31"},
	{name: "Career & Business", id:"2"}
];

export class Activitiesmain extends Component {
	state = {
		topic: "",
		activities: []
	};

	handleSelectionChange = e => {
        let newTopic = topics.find(x => x.name === e.target.innerText);
        let id = parseInt(newTopic.id)
        debugger
		this.setState({ topic: id });
	};

	onTermSubmit = event => {
		event.preventDefault();
		this.getSearchByTerm(this.state.topic);
	};

	getActivities = () => {
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/groups?&sign=true&photo-host=public&category=${this.state.topic}&page=20`)
			.then(res => res.json())
			.then(response => {
				console.log(response);
				this.setState({ activities: [response] });
			})
			.catch(error => (this.errorMsg = error));
    };

	render() {
        const options = topics.map(topic => topic.name)
		return (
			<div className="activities-feed">
				<h2>Activities</h2>
				<Grid item xs={12}>
					<Autocomplete
						id="topics"
						options={options}
						style={{ width: 268 }}
						renderInput={params => (
							<TextField
								{...params}
								label="Topics"
								variant="outlined"
								value={params.inputProps.value}
								fullWidth
							/>
						)}
						onChange={this.handleSelectionChange}
					/>
				</Grid>
                {this.state.activities.length !== 1 && Object.keys(this.state.activities).map((key, idx) => {
                        return <Chip key={idx} label={`${key}: ${this.state.activities[key]}`}></Chip>
                    })}
				<button onClick={this.getActivities}> Click me </button>
			</div>
		);
	}
}

export default Activitiesmain;
