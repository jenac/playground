import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import CourseList from './CourseList';
import { bindActionCreators } from 'redux';
import { Redirect }from 'react-router-dom';
import Spinner from '../common/Spinner';
import { toast } from 'react-toastify';

class CoursesPage extends React.Component {
    state = {
        redirectToAddCoursePage: false
    };

    componentDidMount() {
        let { actions, courses, authors } = this.props;
        if (courses.length === 0) {
            actions.loadCourses().catch(error => {
                console.error("Loading courses failed", error);
            });     
        }
        
        if (authors.length === 0) {
            actions.loadAuthors().catch(error => {
                console.error("Loading authors failed", error);
            });
        }
    }
    
    handleDeleteCourse = course => {
        toast.success("Course deleted.");
        this.props.actions.deleteCourse(course).catch( error => {
            toast.error(`Delete failed. ${error.message}`, { autoClose: false} );
        });
    }

    render() {
        return (
            <>
                { this.state.redirectToAddCoursePage && <Redirect to="/course"></Redirect> }
                <h2>Course</h2>

                { this.props.loading ? (<Spinner></Spinner>) : (
                    <button 
                        style={{ marginBottom: 20 }} 
                        className="btn btn-primary add-course"
                        onClick={() => this.setState({ redirectToAddCoursePage: true})}>
                        Add Course
                    </button>
                )}

                <CourseList onDeleteClick={this.handleDeleteCourse} courses={this.props.courses}></CourseList>
            </>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

function mapStateToProps(state) { //state from reducer, an array
    return {
        courses: 
            state.authors.length === 0 
            ? [] 
            : state.courses.map(course => {
                return {
                    ...course,
                    authorName: state.authors.find(a => a.id === course.authorId).name
                };;
            }),
        authors: state.authors,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 