import { combineReducers } from 'redux';
import course from './courseReducer'; //since it is export default, you can rename it without alias

const rootReducer = combineReducers({
    course //short hand: same as: `course: course`
});

export default rootReducer;
