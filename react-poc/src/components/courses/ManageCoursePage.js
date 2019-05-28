import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCourses }  from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';


class ManageCoursePage extends React.Component {
    componentDidMount() {
        let { authors, courses, loadCourses,  loadAuthors} = this.props;
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
    }
    
    render() {
        return (
            <>
                <h2>Manage Course</h2>
            </>
        );
    }
}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired, //for the whole page
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired

}

function mapStateToProps(state) { //state from reducer, an array
    return {
        courses: state.courses,
        authors: state.authors
    };
}

const mapDispatchToProps = {
    loadCourses, //short for - loadCourses: loadCourses,
    loadAuthors
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage); 