import React from "react";
import { Switch, Route } from "react-router";
import Activitiesmain from './components/ActivitiesComp/Activitiesmain'
import Landing from './containers/Landing'
import SignIn from './components/LandingPage/SignIn'


const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/activities" component={Activitiesmain} />
			<Route path="/signin" component={SignIn} />
			{/* <Route path="/login" component={Quizmain} /> */}
		</Switch>
	);
};

export default Router;
