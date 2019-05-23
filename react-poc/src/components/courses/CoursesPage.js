import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    }; //for input only

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createCourse(this.state.course);
        console.log(this.state.course);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Course</h2>
                <h3>Add Course</h3>
                <input type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}>
                </input>
                <input type="submit" value="Save">
                </input>
                {this.props.courses.map(course => (
                    <div key={course.title}> {course.title}</div>
                ))}
            </form>
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

function mapDispatchToProps(dispatch) {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 