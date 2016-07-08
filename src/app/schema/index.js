import { Schema, arrayOf } from 'normalizr';

export const COURSES = 'courses';
export const TOPICS = 'topics';
export const LESSONS = 'lessons';

const schema = {
  [COURSES]: new Schema(COURSES),
  [TOPICS]: new Schema(TOPICS),
  [LESSONS]: new Schema(LESSONS),
};

schema[COURSES].define({
  topics: arrayOf(schema[TOPICS]),
});

schema[TOPICS].define({
  lessons: arrayOf(schema[LESSONS]),
});

export default schema;
