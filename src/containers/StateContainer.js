import State from '../components/State';
import * as actions from '../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    mainTimer: state.timer.mainTimer,
    intervalTimer: state.timer.intervalTimer,
})

// const mapDispatchToProps = (dispatch)=>({
//     onSetMainTimer : ()=>{dispatch(actions.setMainTimer())},
//     onResetIntervalTimer : ()=>{dispatch(actions.resetIntervalTimer())},
// })

const StateContainer = connect(mapStateToProps)(State);

export default StateContainer;