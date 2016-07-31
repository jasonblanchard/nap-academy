import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import models from 'app/state/models';

import * as actions from 'app/state/actions';
import * as entityConstants from 'app/state/schema';
import CoursePage from 'app/pages/CoursePage';

class CoursePageHandler extends Component {
  render() {
    if (this.props.course) {
      return <CoursePage course={this.props.course} />;
    }
    return <div>loading...</div>;
  }

  componentDidMount() {
    this.props.fetchEntity(entityConstants.COURSE, this.props.params.courseId);
    this.props.fetchCourse(this.props.params.courseId);
  }
}

CoursePageHandler.propTypes = {
  course: PropTypes.object,
  fetchEntity: PropTypes.func,
  fetchCourse: PropTypes.func,
  params: PropTypes.shape({
    courseId: PropTypes.string,
  }),
  topics: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
  course: models.Course.get(state, ownProps.params.courseId),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchEntity: actions.fetchEntity,
    fetchCourse: models.Course.fetch,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePageHandler);
