import * as types from '../actions/ActionTypes';

const initialState = {
    mainTimerStartedAt : null,
    intervalTimerStartedAt : null,
    mainTimer: null,
    intervalTimer: null,
    hasStarted: false,
}

function timer(state = initialState, action){
    switch(action.type){
        case types.SET_MAIN_TIMER :
            return { ...state, mainTimerStartedAt : action.now, intervalTimerStartedAt : state.mainTimerStartedAt };
        case types.RESET_INTERVAL_TIMER:
            return { ...state, intervalTimerStartedAt: action.now};
        case types.TICK:
            return { ...state, mainTimer: action.now - state.mainTimerStartedAt, intervalTimer: action.now - state.intervalTimerStartedAt };
        case types.START_EXERCISE:
            return { ...state, hasStarted:true,}
        default:
            return state;
    }
}

export default timer;