import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import * as actions from 'app/actions';
import * as entityConstants from 'app/schema';
import * as selectors from 'app/reducers';
import CoursesPage from 'app/pages/CoursesPage';

class CoursesPageHandler extends Component {
  render() {
    return <CoursesPage courses={this.props.courses} />;
  }

  componentDidMount() {
    this.props.fetchEntity(entityConstants.COURSE);
  }
}

CoursesPageHandler.propTypes = {
  courses: PropTypes.object,
  fetchEntity: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    courses: selectors.getEntities(state, entityConstants.COURSE),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPageHandler);
