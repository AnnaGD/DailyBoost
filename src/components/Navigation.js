import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";

const Navigation = () => {
	const useStyles = makeStyles({
		root: {
			width: 1000
		}
	});

	return (
		<>
			<AppBar position="relative">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: "1" }}>
						DailyBOOST
					</Typography>

					<Typography>
						<Button color="inherit">Login</Button>
					</Typography>

					{/* <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/"></Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about"></Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/dashboard"></Link> // use the list structure to create buttons for the user to use
                    </li>
                </ul> */}
				</Toolbar>
			</AppBar>

		</>
	);
};

export default Navigation;
