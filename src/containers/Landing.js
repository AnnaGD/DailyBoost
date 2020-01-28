import { connect } from 'react-redux';
import Landing from '../components/LandingPage/Landing';
import { takeQuiz } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        quizReady: state.quizReady,
        quizQuestions: state.quizQuestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        takeQuiz: () => dispatch(takeQuiz()),
        // login: () => dispatch(login()),
        // logout: () => dispatch(logout()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);