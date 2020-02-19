import * as actions from '../actions';
import Logger from '../components/Logger';

import {connect} from 'react-redux';


const mapStateToProps = (state)=>({
    logs: state.logger.logs,
    mainTimer: state.timer.mainTimer,
    intervalTimer : state.timer.intervalTimer,
    hasStarted: state.timer.hasStarted,
})

const mapDispatchToProps = (dispatch)=>({
    addLog: (log)=> dispatch(actions.addLog(log)),
    deleteLog: (index)=>dispatch(actions.deleteLog(index)),
    editLog: (index, log)=>dispatch(actions.editLog(index, log)),
    
    setMainTimer : (now)=>{dispatch(actions.setMainTimer(now))},
    resetIntervalTimer : (now)=>dispatch(actions.resetIntervalTimer(now)),
    startExercise : ()=>dispatch(actions.startExercise()),
    tick: ()=>dispatch(actions.tick()),
})

const LoggerContainer = connect(mapStateToProps, mapDispatchToProps)(Logger);

export default LoggerContainer;