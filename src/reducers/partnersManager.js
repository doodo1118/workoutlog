import * as types from '../actions/ActionTypes';

const BACK = 'BACK';

// /*
const examplePartners = 
    [
        {
            routineId:'bongil', 
            userId:'bongil',
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'DL',
                    weight: 180,
                    time: 90000000,
                    reps: 10,
                },
                {
                    motionName:'DL',
                    weight: 170,
                    time: 94524240,
                    reps: 10,
                },
                {
                    motionName:'DL',
                    weight: 160,
                    time: 741140,
                    reps: 12,
                },

            ]
        },
        {
            routineId:'kkw', 
            userId:'kkw', 
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'BP',
                    weight: 100,
                    time: 126,
                    reps: 12,
                },
                {
                    motionName:'DL',
                    weight: 160,
                    time: 90,
                    reps: 12,
                },
                {
                    motionName:'BP',
                    weight: 160,
                    time: 90,
                    reps: 12,
                },
                {
                    motionName:'BP',
                    weight: 160,
                    time: 90,
                    reps: 12,
                },
                {
                    motionName:'DL',
                    weight: 160,
                    time: 90,
                    reps: 12,
                },
            ]
        },
        {
            routineId:'hannzo', 
            userId:'hanzo', 
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'PU',
                    weight:20,
                    time:null,
                    reps:10,
                }
            ]
        },
        {
            routineId:'wldnd', 
            userId:'wldnd', 
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'IBP',
                    weight:60,
                    time:100,
                    reps:10,
                }
            ]
        },
        {
            routineId:'qhdrl', 
            userId:'qhdrl', 
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'CR',
                    weight:50,
                    time:90,
                    reps:12,
                }
            ]
        },
        {
            routineId:'dd', 
            userId:'dd', 
            routineInfo:{
                volume:5600,
                time: 125402,
                sets:30,
                targetParts: `${BACK}`, 
                date: Date.now(),
            },
            logs:[
                {
                    motionName:'CR',
                    weight:null,
                    time:null,
                    reps:null,
                }
            ]
        },
    ]

// */ 
const initialState = {
    partners : examplePartners,
    
    //아래 세개 객체로 묶기
    totalVolume:0,
    totalSets:0,
    totalTime:0, 


}

function partnersManager(state = initialState, action){
    switch(action.type){
        case types.ADD_PARTNER:
            return { 
                ...state, 
                partners : state.partners.concat(action.partnerId),
                totalVolume : state.totalVolume + action.partnerId.routineInfo.volume,
                totalSets : state.totalVolume + action.partnerId.routineInfo.sets,
                totalTime : state.totalVolume + action.partnerId.routineInfo.time,
            };
        case types.DELETE_PARTNER:
            return { ...state, };
        default:
            return state;
    }
}

export default partnersManager;