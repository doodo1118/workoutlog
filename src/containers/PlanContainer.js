import * as actions from '../actions';
import Plan from '../components/Plan';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    //timer
    intervalTimer : state.timer.intervalTimer,
    
    //partners
    partnersData : state.partnersManager.partners,
    totalVolume: state.partnersManager.totalVolume,
    totalSets: state.partnersManager.totalSets,
    totalTime: state.partnersManager.totalTime,

    //logs
    totalSets: state.logger.totalSets,
    totalVolume: state.logger.totalVolume,
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

const PlanContainer = connect(mapStateToProps, mapDispatchToProps)(Plan);

export default PlanContainer;