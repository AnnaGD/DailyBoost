import { connect } from 'react-redux';
import Quizmain from '../components/Quizmain';
import { quizComplete, quizResult, toggleHistory } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        quizQuestions: state.quizQuestions,
        quizResult: state.quizResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // quizComplete: () => dispatch(quizComplete()),
        quizResult: (result) => dispatch(quizResult(result)),
        toggleHistory: () => dispatch(toggleHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quizmain);