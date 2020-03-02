import * as actions from '../actions';
import Logger from '../components/Logger';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    //timer
    intervalTimer : state.timer.intervalTimer,
    
    //logs
    totalSets: state.logger.totalSets,
    totalVolume: state.logger.totalVolume,
})

const mapDispatchToProps = (dispatch)=>({
    addLog: (log)=> dispatch(actions.addLog(log)),
    deleteLog: (index)=>dispatch(actions.deleteLog(index)),
    // editLog: (index, log)=>dispatch(actions.editLog(index, log)),
    
    resetIntervalTimer : (now)=>dispatch(actions.resetIntervalTimer(now)),
})

const LoggerContainer = connect(mapStateToProps, mapDispatchToProps)(Logger);

export default LoggerContainer;