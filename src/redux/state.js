export default {
	currentUser: {
		username: "guest",
		loggedIn: false
	},

	quizReady: false,

	history: [],

	showHistory: false,

	quizResult: null,

	quizQuestions: [
		{
			question: "How are you feeling right now?",
			answers: [
				{
					type:
						"May I suggest a body scan, or a breathing excerise to center yourself at this time", // Microsoft -- AKA feeling bad
					content: "Tired and/or Stressed"
				},
				{
					type:
						"Maybe diving into a new book series or exploring a museum would be to your liking? Explore Links below", //Nintendo -- AKA OK
					content: "I'm feeling alright"
				},
				{
					type:
						"Sounds like you're doing great, I'd suggest to pass on the happiness and get involved with your local community!!", //Sony -- AKA Woo hooh
					content: "Feeling Great!!"
				}
			]
		},
		{
			question: "Any trouble with falling asleep, or staying asleep?",
			answers: [
				{
					type:
						"May I suggest a body scan, or a breathing excerise to center yourself at this time", // Microsoft -- AKA feeling bad
					content: "Nearly every day."
				},
				{
					type:
						"You should look into social events that are hapenning tonight, it's never too late to learn how to two-step!!", //Nintendo -- AKA OK
					content: "Some days through out the week."
				},
				{
					type:
						"Sounds like you're doing great, I'd suggest to pass on the happiness and get involved with your local community!!", //Sony -- AKA Woo hooh
					content: "Not at All"
				}
			]
		},
		{
			question:
				"I can find something positive in even the most difficult situations.",
			answers: [
				{
					type:
						"May I suggest a body scan, or a breathing excerise to center yourself at this time", //Microsoft -- AKA feeling bad
					content: "But today was not that day"
				},
				{
					type:
						"Maybe diving into a new book series or exploring a museum would be to your liking? Explore Links below", //Nintendo -- AKA OK
					content: "Sometimes"
				},
				{
					type:
						"Sounds like you're doing great, I'd suggest to pass on the happiness and get involved with your local community!!", //Sony -- AKA Woo hooh
					content: "Most of the time."
				}
			]
		},
		{
			question: "I'm full of energy. I'm literally bouncing off the walls.",
			answers: [
				{
					type:
						"May I suggest a body scan, or a breathing excerise to center yourself at this time", //Microsoft -- AKA feeling bad
					content: "Nope, feeling kinda low."
				},
				{
					type:
						"You should look into social events that are hapenning tonight, it's never too late to learn how to two-step!!", //Nintendo -- AKA OK
					content: "I would rather taka a nap"
				},
				{
					type:
						"Sounds like you're doing great, I'd suggest to pass on the happiness and get involved with your local community!!", //Sony -- AKA Woo hooh
					content: "Absolutly, feeling very productive."
				}
			]
		},
		{
			question: "How social did you feel today?",
			answers: [
				{
					type:
						"May I suggest a body scan, or a breathing excerise to center yourself at this time", //Microsoft -- AKA feeling bad
					content:
						"As told best by Angela Martin -- I don't have a headache. I'm just preparing"
				},
				{
					type:
						"You should look into social events that are hapenning tonight, it's never too late to learn how to two-step!!", //Nintendo -- AKA OK
					content: "I didn't mind the small talk so much"
				},
				{
					type:
						"Sounds like you're doing great, I'd suggest to pass on the happiness and get involved with your local community!!", //Sony -- AKA Woo hooh
					content:
						"It feels great to have connected with my friends and family today."
				}
			]
		}
	]
};
