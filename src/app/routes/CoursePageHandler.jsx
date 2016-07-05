import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import * as actions from 'app/actions';
import * as selectors from 'app/reducers';
import CoursePage from 'app/pages/CoursePage';

class CoursePageHandler extends Component {
  render() {
    if (this.props.course) {
      return <CoursePage course={this.props.course} />;
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
  params: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
  course: selectors.getEntities('courses', ownProps.params.courseId, state),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePageHandler);
