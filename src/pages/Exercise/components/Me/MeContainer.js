import Me from './Me';
import * as actions from '../../../../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    myLogs: state.logger.myLogs,
    userId: 'Me',
})

const mapDispatchToProps = (dispatch)=>({
    addLog: ()=>{
        dispatch(actions.addLog);
    },
    deleteLog: ()=>{
        dispatch(actions.deleteLog);
    },
    editLog: ()=>{
        dispatch(actions.editLog);
    },
})

const MeContainer = connect(mapStateToProps, mapDispatchToProps)(Me);

export default MeContainer;
