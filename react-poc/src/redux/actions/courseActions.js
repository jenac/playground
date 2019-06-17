import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall } from './apiStatusActions';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function(dispacth) {
        dispacth(beginApiCall());
        return courseApi
            .getCourses()
            .then(courses => {
                dispacth(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw error;
            });
    };
}

export function saveCourse(course) {
    return function(dispacth, getState) { //getState can get all the state in the store, here we did not use it.
        dispacth(beginApiCall());
        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                course.id 
                    ? dispacth(updateCourseSuccess(savedCourse))
                    : dispacth(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw error;
            });
    }
}