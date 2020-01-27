import React from "react";
import { Switch, Route } from "react-router";
import Quizmain from './containers/Quizmain'
import Activitiesmain from './components/ActivitiesComp/Activitiesmain'
import Landing from './components/LandingPage/Landing'
// import Home from './containers/Home'
// import Login from './components/About'
// import Navigation from './containers/'
// import Quiz from './containers/Dashboard'

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/activities" component={Activitiesmain} />
			{/* <Route  */}
			{/* <Route path="/" component={Quiz} /> */}
		</Switch>
	);
};

export default Router;
