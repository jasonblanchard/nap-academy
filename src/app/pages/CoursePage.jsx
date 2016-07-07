import React, { PropTypes } from 'react';

const CoursePage = (props) => (
  <div>
    <h2>Course</h2>
    {props.course.name}
    <h3>Topics</h3>
    <ul>
      {props.topics.map(topic => <li key={topic.id}>{topic.name}</li>)}
    </ul>
  </div>
);

CoursePage.propTypes = {
  course: PropTypes.object,
  topics: PropTypes.array,
};

export default CoursePage;
