import Result from '../components/Result';
import * as actions from '../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    //logs
    myLogs: state.logger.myLogs,
    totalSets: state.logger.totalSets,
    totalVolume: state.logger.totalVolume,
    //timer
    mainTimer: state.timer.mainTimer,
    intervalTimer: state.timer.intervalTimer,
})

const mapDispatchToProps = (dispatch)=>({
})

const ResultContainer = connect(mapStateToProps, mapDispatchToProps)(Result);

export default ResultContainer;