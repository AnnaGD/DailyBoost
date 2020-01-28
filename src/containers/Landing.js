import { connect } from 'react-redux';
import Quizmain from '../components/Quizmain';
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

export default connect(mapStateToProps, mapDispatchToProps)(Quizmain);