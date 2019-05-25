import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import CourseList from './CourseList';
import { bindActionCreators } from 'redux';


class CoursesPage extends React.Component {
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
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page
    authors: PropTypes.array.isRequired

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
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); 