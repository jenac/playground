import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse } from '../tools/mockData'
import { toast } from 'react-toastify';

// const ManageCoursePage = (props) => {
const ManageCoursePage = ({ authors, courses, loadCourses, loadAuthors, saveCourse, history, ...props }) => {    //directly desctructor
    const [ course, setCourse ] = useState({...props.course})
    const [ errors, setErrors ] = useState({}); //local state also?
    const [ saving, setSaving ] = useState(false); //local state

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                console.error("Loading courses failed", error);
            });
        } else {
            setCourse({...props.course});
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                console.error("Loading authors failed", error);
            });
        }
    }, [props.course]); //empty means no didmount init

    function handleChange(event) {
        const {name, value} = event.target;
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === 'authorId' ? parseInt(value, 10) : value
        }))
    }

    function formIsValid() {
        const { title, authorId, category } = course;
        const errors = {};

        if (!title) errors.title = "Title is required";
        if (!authorId) errors.author = "Author is required";
        if (!category) errors.category = "Category is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        setSaving(true);
        saveCourse(course).then(() => { 
            toast.success('Course Saved.');
            history.push('/courses'); 
        }).catch(error => {
            setSaving(false);
            setErrors({ onSave: error.message });
        });
    }
    return (
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} saving={saving}></CourseForm>
    );

}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
}

function getCourseBySlug(courses, slug) {
    return courses.find(course => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) { //state from reducer, an array
    const slug = ownProps.match.params.slug;
    const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
    return {
        course,
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