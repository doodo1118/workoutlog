// import * as types from '../actions/ActionTypes';

import logger from './logger';
import partnersManager from './partnersManager';
import timer from './timer';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    logger : logger,
    partnersManager : partnersManager,
    timer : timer,
})

export default reducers;