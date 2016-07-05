import React, { PropTypes } from 'react';

const CoursePage = (props) => (
  <div>
    <h2>Course</h2>
    {props.course.name}
  </div>
);

CoursePage.propTypes = {
  course: PropTypes.object,
};

export default CoursePage;
