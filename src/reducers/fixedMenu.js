import * as types from '../actions';

const initialState = {
    syncWith:null,
    focusOn:null,
}

function fixedMenu(state=initialState, action){
    switch(action.type){
        case types.SYNC_WITH:
            return { ...state, 
                        syncWith: { 
                            partnerId : action.partnerId,
                            index : action.index,
                        }
                    };
        case types.FOCUS_ON:
            return { ...state,
                        focusOn:action.focusOn };
        default:
            return state;
    }
}

export default fixedMenu;