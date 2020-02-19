import * as types from './ActionTypes';

export const increment = ()=>({
    type: types.INCREMENT,
})

export const decrement = ()=>({
    type: types.DECREMENT,
})

//color가 key :value형식 아닌이유?
export const setColor = (color)=>({
    type: types.SET_COLOR,
    color
})

//partners
export const addPartner = (partnerId)=>({
    type: types.ADD_PARTNER,
    partnerId,
});
export const deletePartner = (partnerId)=>({
    type: types.DELETE_PARTNER,
    partnerId,
});

//logger
export const addLog = (log)=>({
    type: types.ADD_LOG,
    log,
});

//myLogsContainer
export const deleteLog = (index)=>({
    type: types.DELETE_LOG,
    index,
});
export const editLog = (index, log)=>({
    type: types.EDIT_LOG,
    index,
    log,
});

//browser
export const syncWith = (partnerId, index)=>({
    type: types.SYNC_WITH,
    partnerId,
    index,
});
export const focusOn = (partnerId, index)=>({
    type: types.FOCUS_ON,
    partnerId,
    index,
})

//state, myLogsContainer, partners
export const setMainTimer = (now)=>({
    type: types.SET_MAIN_TIMER,
    now,
});
export const resetIntervalTimer = (now)=>({
    type: types.RESET_INTERVAL_TIMER,
    now,
});
export const tick = ()=>({
    type: types.TICK,
    now:Date.now(),
})
export const startExercise = ()=>({
    type: types.START_EXERCISE,
})
