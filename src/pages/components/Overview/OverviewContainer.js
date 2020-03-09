import * as actions from '../../../actions';
import Overview from './Overview';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    //for Both
    //partners
    partnersData : state.partnersManager.partners,
    totalVolume: state.partnersManager.totalVolume,
    totalSets: state.partnersManager.totalSets,
    totalTime: state.partnersManager.totalTime,
    //logs
    totalSets: state.logger.totalSets,
    totalVolume: state.logger.totalVolume,

    //for Result
    //timer
    mainTimer: state.timer.mainTimer,
    intervalTimer: state.timer.intervalTimer,
    myLogs: state.logger.myLogs,
})

const mapDispatchToProps = (dispatch)=>({
    //timer
    startExercise : ()=>{
        const now = Date.now();
        dispatch(actions.setMainTimer(now));
        dispatch(actions.resetIntervalTimer(now));
        
    },
    tick: ()=>dispatch(actions.tick()),
})

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer;