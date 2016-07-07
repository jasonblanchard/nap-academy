import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import * as actions from 'app/actions';
import * as selectors from 'app/reducers';
import CoursePage from 'app/pages/CoursePage';

class CoursePageHandler extends Component {
  render() {
    if (this.props.course) {
      return <CoursePage course={this.props.course} topics={this.props.topics} />;
    }
    return <div>loading...</div>;
  }

  componentDidMount() {
    this.props.fetchEntity('courses', this.props.params.courseId);
  }
}

CoursePageHandler.propTypes = {
  course: PropTypes.object,
  fetchEntity: PropTypes.func,
  params: PropTypes.shape({
    courseId: PropTypes.string,
  }),
  topics: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
  const course = selectors.getEntities(state, 'courses', ownProps.params.courseId);
  const topics = course ? selectors.getEntities(state, 'topics', course.topics) : [];

  return {
    course,
    topics,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePageHandler);
