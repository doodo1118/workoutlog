import * as types from '../actions/ActionTypes';

const initialState = {
    myLogs : [],
    setsCount : 0,
    volumeCount : 0,
}

function logger(state = initialState, action){
    switch(action.type){
        case types.ADD_LOG:
            return { ...state,
                        myLogs: state.myLogs.concat(action.log),
                        setsCount: state.setsCount +1,
                        volumeCount: state.volumeCount + (action.log.weight * action.log.reps),};
        case types.DELETE_LOG:
            return { ...state,
                        myLogs: state.myLogs.splice(action.index),
                        setsCount: state.setsCount -1,
                    };
        case types.EDIT_LOG:
            return { ...state,
                        myLogs: state.myLogs.sp};
        default:
            return state;
    }
}

export default logger;