import * as types from '../actions/ActionTypes';

const initialState = {
    logs : [{motionName:'START',}],
}

function logger(state = initialState, action){
    switch(action.type){
        case types.ADD_LOG:
            return { ...state,
                        logs: state.logs.concat(action.log),};
        case types.DELETE_LOG:
            return { ...state,
                        logs: state.logs.splice(action.index)};
        case types.EDIT_LOG:
            return { ...state,
                        logs: state.logs.sp};
        default:
            return state;
    }
}

export default logger;