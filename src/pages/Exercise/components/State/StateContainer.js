import State from './State';
import * as actions from '../../../../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    //logs
    totalSets: state.logger.totalSets,
    totalVolume: state.logger.totalVolume,
    //timer
    mainTimer: state.timer.mainTimer,
    intervalTimer: state.timer.intervalTimer,
})

const mapDispatchToProps = (dispatch)=>({
    //timer
    startExercise : ()=>{
        const now = Date.now();
        dispatch(actions.setMainTimer(now));
        dispatch(actions.resetIntervalTimer(now));
    },
    resetIntervalTimer : ()=>{
        const now = Date.now();
        dispatch(actions.resetIntervalTimer(now));
    },
    tick: ()=>dispatch(actions.tick()),
})

const StateContainer = connect(mapStateToProps, mapDispatchToProps)(State);

export default StateContainer;