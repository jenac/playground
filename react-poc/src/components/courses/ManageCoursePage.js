import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse } from '../tools/mockData'

// const ManageCoursePage = (props) => {
const ManageCoursePage = ({ authors, courses, loadCourses, loadAuthors, saveCourse, ...props }) => {    //directly desctructor
    const [ course, setCourse ] = useState({...props.course})
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                console.error("Loading courses failed", error);
            });
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                console.error("Loading authors failed", error);
            });
        }
    }, []); //empty means no didmount init

    function handleChange(event) {
        const {name, value} = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }))
    }

    function handleSave(event) {
        event.preventDefault();
        saveCourse(course);
    }
    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave}></CourseForm>
    );

}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
}

function mapStateToProps(state) { //state from reducer, an array
    return {
        course: newCourse,
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses, //short for - loadCourses: loadCourses,
    loadAuthors,
    saveCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 