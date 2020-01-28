import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Activities from './modules/views/Activities';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import InspirationalQuote from './modules/views/InspirationalQuote';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import Quizmain from '../../containers/Quizmain';


function Landing( props ) {
  debugger
  return (
    <React.Fragment>
      <AppAppBar />
      <InspirationalQuote />
      <ProductHowItWorks takeQuiz={() => props.takeQuiz()} />
      {props.quizReady && 
      <>
        <Quizmain quizQuestions={props.quizQuestions}/> 
        <Activities />
      </>  }
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Landing);