import { connect } from 'react-redux';
import Landing from '../components/LandingPage/Landing';
import { takeQuiz, fetchHistory, toggleHistory } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        quizReady: state.quizReady,
        quizQuestions: state.quizQuestions,
        history: state.history,
        showHistory: state.toggleHistory,
        quizResult: state.quizResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        takeQuiz: () => dispatch(takeQuiz()),
        fetchHistory: () => dispatch(fetchHistory()),
        toggleHistory: () => dispatch(toggleHistory())
        // login: () => dispatch(login()),
        // logout: () => dispatch(logout()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);