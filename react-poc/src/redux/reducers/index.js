import { combineReducers } from 'redux';
import courses from './courseReducer'; //since it is export default, you can rename it without alias

const rootReducer = combineReducers({
    courses //short hand: same as: `course: course`
});

export default rootReducer;
