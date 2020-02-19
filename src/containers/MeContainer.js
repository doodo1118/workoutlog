import Me from '../components/Me';
import * as actions from '../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    logs: state.logger.logs,
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
