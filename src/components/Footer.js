import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Spa from "@material-ui/icons/Spa";
import RestoreIcon from "@material-ui/icons/Restore";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import { Link } from "react-router-dom";

const Footer = () => {
	const useStyles = makeStyles({
		root: {
			width: 700,
			align: "center"
		}
	});

	const classes = useStyles();
	const [value, setValue] = React.useState("recents");

	const handleChange = (event, newValue) => {
		setValue(newValue);
		// debugger
		// console.log(event.target.id)
	};

	return (
		<>
			<BottomNavigation
				value={value}
				onChange={handleChange}
				className={classes.root}
			>
				<BottomNavigationAction
					label="Recents"
					value="recents"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					label="Quiz"
					value="quiz"
					icon={<LibraryBooksIcon />}
					id="quiz"
				/>
				<BottomNavigationAction
					label="Activities"
					value="activities"
					icon={<Spa />}
				/>
				<BottomNavigationAction
					label="Meet-Up"
					value="meet-up"
					icon={<LocationOnIcon />}
				/>
			</BottomNavigation>
		</>
	);
};

export default Footer;
