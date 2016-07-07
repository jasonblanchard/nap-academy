import { Schema, arrayOf } from 'normalizr';

export const COURSES = 'courses';
export const TOPICS = 'topics';

const schema = {
  [COURSES]: new Schema(COURSES),
  [TOPICS]: new Schema(TOPICS),
};

schema[COURSES].define({
  topics: arrayOf(schema[TOPICS]),
});

export default schema;
