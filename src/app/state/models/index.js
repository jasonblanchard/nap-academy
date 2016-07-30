import { fk, Model } from 'redux-orm';

export class Course extends Model {
  static reducer(state, action, CourseModel) {
    switch (action.type) {
      case 'LOAD_ENTITIES':
        Object.keys(action.entities.course).forEach(id => CourseModel.create(action.entities.course[id]));
        break;
      default:
        break;
    }
  }
}
Course.modelName = 'Course';

export class Topic extends Model {
  static reducer(state, action, CourseModel) {
    switch (action.type) {
      case 'LOAD_ENTITIES':
        Object.keys(action.entities.topic).forEach(id => CourseModel.create(action.entities.topic[id]));
        break;
      default:
        break;
    }
  }
}
Topic.modelName = 'Topic';
Topic.fields = {
  course: fk('Course', 'lesson'),
};

export class Lesson extends Model {
  static reducer(state, action, CourseModel) {
    switch (action.type) {
      case 'LOAD_ENTITIES':
        Object.keys(action.entities.lesson).forEach(id => CourseModel.create(action.entities.lesson[id]));
        break;
      default:
        break;
    }
  }
}
Lesson.modelName = 'Lesson';
Lesson.fields = {
  topic: fk('Topic', 'lesson'),
};
