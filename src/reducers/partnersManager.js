import * as types from '../actions/ActionTypes';


// /*
    const examplePartners = 
    [
        {
            id:'', 
            userId:'bongil',
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
            id:'', 
            userId:'kkw', 
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
            id:'', 
            userId:'hanzo', 
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
            id:'', 
            userId:'wldnd', 
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
            id:'', 
            userId:'qhdrl', 
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
            id:'', 
            userId:'dd', 
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
}

function partnersManager(state = initialState, action){
    switch(action.type){
        case types.ADD_PARTNER:
            return { ...state, partners : state.partners.concat(action.partnerId)};
        case types.DELETE_PARTNER:
            return { ...state, };
        default:
            return state;
    }
}

export default partnersManager;