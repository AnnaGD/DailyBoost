import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
// import Activities from './modules/views/Activities';
import AppFooter from './modules/views/AppFooter';
import InspirationalQuote from './modules/views/InspirationalQuote';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import AppAppBar from './modules/views/AppAppBar';
import Quizmain from '../../containers/Quizmain';
import History from './modules/views/History';


function Landing( props ) {
  // debugger
  return (
    <React.Fragment>
      <AppAppBar />
      <InspirationalQuote />
      <ProductHowItWorks takeQuiz={() => props.takeQuiz()} />
      {props.quizReady && <Quizmain quizQuestions={props.quizQuestions}/>}
          {props.showHistory && <History history={props.history} fetchHistory={() => props.fetchHistory()} />} 
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Landing);