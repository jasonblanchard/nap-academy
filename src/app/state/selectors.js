import { createSelector } from 'reselect'
import schema from './models/schema';

export const ormSelector = state => state.orm;

export const getCourse = createSelector(
  ormSelector,
  schema.createSelector(orm => {
    if (!orm.Course.exists()) return;
    const course = orm.Course.withId('74f418b0-411d-11e6-8364-a7e5cc2c3763');
    const obj = Object.assign({}, course.ref);
    obj.topics = course.topics.map(topicId => {
      const topic = orm.Topic.withId(topicId);
      const topicRef = Object.assign({}, topic.ref);
      topicRef.lessons = topic.lessons.map(lessonId => orm.Lesson.withId(lessonId).ref);
      return topicRef;
    });
    return obj;
  })
);
