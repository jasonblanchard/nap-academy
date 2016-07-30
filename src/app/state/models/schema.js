import { Schema, arrayOf } from 'normalizr';

const schema = {
  Course: new Schema('Course'),
  Topic: new Schema('Topic'),
  Lesson: new Schema('Lesson'),
};

schema.Course.define({
  topics: arrayOf(schema.Topic),
});

schema.Topic.define({
  lessons: arrayOf(schema.Lesson),
});

export default schema;
