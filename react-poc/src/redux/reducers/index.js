import { combineReducers } from 'redux';
import courses from './courseReducer'; //since it is export default, you can rename it without alias
import authors from './authorReducer';
import apiCallsInProgress from './apiStatusReducer';
const rootReducer = combineReducers({
    courses, //short hand: same as: `course: course`
    authors,
    apiCallsInProgress,

});

export default rootReducer;
