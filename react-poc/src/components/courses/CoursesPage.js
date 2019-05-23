import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course));
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
            </form>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        course: state.course
    }
}

export default connect(mapStateToProps)(CoursesPage); 