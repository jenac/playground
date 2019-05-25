import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from "redux";
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    componentDidMount() {
        this.props.loadCourses().catch(error => {
            console.error("Loading courses failed", error);
        })
    }
    
    render() {
        return (
            <>
                <h2>Course</h2>
                <CourseList courses={this.props.courses}></CourseList>
            </>
        );
    }
}

CoursesPage.propTypes = {
    createCourse: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page

}

function mapStateToProps(state) { //state from reducer, an array
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 