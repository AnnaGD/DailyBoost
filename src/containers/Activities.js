import { connect } from 'react-redux';
import Activities from '../components/LandingPage/modules/views/Activities';
import { toggleHistory, fetchHistory } from '../redux/actions';

const mapStateToProps = ( state ) => {
    return {
        showHistory: state.showHistory,
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHistory: () => dispatch(toggleHistory()),
        fetchHistory: () => dispatch(fetchHistory())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);